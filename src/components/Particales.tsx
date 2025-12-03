/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const snowflakeTextureLoader = new THREE.TextureLoader().load(
  "/assets/snowflake.png"
);

const SnowParticles = () => {
  const particleNum = 3000;
  const maxRange = 2000;
  const minRange = maxRange / 2;
  const geometry = new THREE.BufferGeometry();

  const particlesRef = useRef<any>();

  useFrame(() => {
    const particles = particlesRef.current;
    if (particles) {
      const positionsAttribute = particles.geometry.getAttribute("position");

      for (let i = 0; i < positionsAttribute.array.length; i += 3) {
        positionsAttribute.array[i] -= 2.7;
        positionsAttribute.array[i + 1] -= 2;

        if (positionsAttribute.array[i] < -(window.innerWidth / 1.5)) {
          positionsAttribute.array[i] = Math.floor(Math.random() * maxRange);
          positionsAttribute.array[i + 1] = Math.floor(
            Math.random() * maxRange
          );
        }
      }

      positionsAttribute.needsUpdate = true;
    }
  });

  const particales = useMemo(() => {
    const positions = new Float32Array(particleNum * 3);
    for (let i = 0; i < particleNum; i++) {
      positions[i * 3] = Math.floor(Math.random() * maxRange - minRange);
      positions[i * 3 + 1] = Math.floor(Math.random() * maxRange - minRange);
      positions[i * 3 + 2] = Math.floor(Math.random() * maxRange - minRange);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: 12,
      map: snowflakeTextureLoader,
      blending: THREE.AdditiveBlending,
      depthTest: false, // Disable depth testing for particles
      transparent: true,
    });

    return (
      <points
        ref={particlesRef}
        geometry={geometry}
        material={pointMaterial}
        renderOrder={1}
      />
    );
  }, []);

  return particales;
};

export default SnowParticles;
