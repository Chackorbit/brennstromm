import React, { useRef, useEffect, useCallback } from "react";

interface ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accelX: number;
  accelY: number;
  life: number;
  alpha: number;
  size: number;
  maxLife: number;
}

class Particle implements ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accelX: number;
  accelY: number;
  life: number;
  alpha: number;
  size: number;
  maxLife: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.accelX = 0;
    this.accelY = 0;
    this.life = 2000;
    this.alpha = 1;
    this.size = 2;
    this.maxLife = 2000;
  }

  update() {
    this.vx += this.accelX;
    this.vy += this.accelY;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(216,204,181, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  isAlive() {
    return this.life >= 0;
  }
}

class ParticleSystem {
  particles: Particle[];
  updateHandler?: (particle: Particle) => void;

  constructor() {
    this.particles = [];
  }

  addParticle(particle: Particle) {
    this.particles.push(particle);
  }

  update() {
    this.particles.forEach((particle) => {
      particle.update();
      this.updateHandler && this.updateHandler(particle);
    });
  }

  calculateAcceleration(
    mouseX: number,
    mouseY: number,
    objectX: number,
    objectY: number,
    maxAcceleration: number = 1
  ): { x: number; y: number } {
    const dx = objectX - mouseX;
    const dy = objectY - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return { x: 0, y: 0 };

    const normalizedX = dx / distance;
    const normalizedY = dy / distance;

    const accelerationMagnitude = Math.min(
      maxAcceleration,
      maxAcceleration / (distance * 3)
    );

    return {
      x: normalizedX * accelerationMagnitude,
      y: normalizedY * accelerationMagnitude,
    };
  }

  onUpdate(fn: (particle: Particle) => void) {
    this.updateHandler = fn;
  }
}

const DustEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const initParticles = useCallback((system: ParticleSystem, count: number) => {
    system.particles = [];
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      p.x = Math.random() * window.innerWidth;
      p.y = Math.random() * window.innerHeight;
      p.life = Math.random() * 1000 + 1000;
      p.size = Math.random() * 2.5;
      p.maxLife = p.life;
      system.addParticle(p);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const system = new ParticleSystem();
    particleSystemRef.current = system;
    initParticles(system, window.innerWidth > 768 ? 3000 : 1000);

    system.onUpdate((particle) => {
      if (!particle.isAlive()) {
        particle.x = Math.random() * window.innerWidth;
        particle.y = Math.random() * window.innerHeight;
        particle.vx = 0;
        particle.vy = 0;
        particle.life = Math.random() * 1000 + 1000;
        particle.maxLife = particle.life;
      }

      particle.life -= 10;
      const acceleration = system.calculateAcceleration(
        mousePos.current.x,
        mousePos.current.y,
        particle.x,
        particle.y
      );
      particle.accelX = (Math.random() - 0.5) * 0.02 + acceleration.x;
      particle.accelY = (Math.random() - 0.5) * 0.02 + acceleration.y;

      if (particle.life >= particle.maxLife / 2) {
        particle.alpha = 1 - particle.life / particle.maxLife;
      } else {
        particle.alpha = particle.life / particle.maxLife;
      }

      particle.update();
    });

    const update = () => {
      system.update();
    };

    const draw = () => {
      if (!ctxRef.current) return;
      ctxRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
      system.particles.forEach((particle) => particle.draw(ctxRef.current!));
    };

    const render = () => {
      update();
      draw();
      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      if (particleSystemRef.current) {
        initParticles(
          particleSystemRef.current,
          window.innerWidth > 768 ? 3000 : 1000
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="bg-transparent fixed top-0 left-0 pointer-events-none"
    />
  );
};

export default DustEffect;
