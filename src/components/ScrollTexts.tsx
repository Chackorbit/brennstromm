import React, {
  Dispatch,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

type Props = {
  setIsScrollDisabled: Dispatch<boolean>;
  setShowPortfolio: Dispatch<boolean>;
  isScrollDisabled: boolean;
  showPortfolio: boolean;
  triggerMoving: boolean;
  setIsPositionChanged: Dispatch<boolean>;
  setAnimating: Dispatch<boolean>;
  isPositionChanged: boolean;
  backFromGaming: boolean;
};

const SectionOne = lazy(() => import("./SectionOne"));
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));
const SectionFour = lazy(() => import("./SectionFour"));
const SectionFive = lazy(() => import("./SectionFive"));
const ToolBar = lazy(() => import("./ToolBar"));

const cloudVariants = {
  scaled: {
    scale: 12,
    transition: { duration: 0.5 },
  },
  notScaled: {
    scale: 0,
    transition: { duration: 0.5 },
  },
};

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.5 },
  },
};

function ScrollTexts({
  setIsScrollDisabled,
  showPortfolio,
  setShowPortfolio,
  triggerMoving,
  isPositionChanged,
  setIsPositionChanged,
  backFromGaming,
  setAnimating,
}: Props) {
  const three = useThree();

  useEffect(() => {
    if (!triggerMoving) return;

    let animationFrameId: number;

    const animate = () => {
      const Hill = three.scene.getObjectByName("hill");
      const Flag = three.scene.getObjectByName("flag");
      if (Hill && Flag) {
        gsap.to(Hill.position, {
          z: Hill.position.z - 1.5,
          x: Hill.position.x + 0.5,
          y:
            window.innerWidth > 600
              ? Hill.position.y + 0.5
              : Hill.position.y + 0.15,
          duration: 1,
        });
        gsap.to(Flag.position, {
          z: Flag.position.z - 1.5,
          x: Flag.position.x + 0.5,
          y:
            window.innerWidth > 600
              ? Flag.position.y + 0.5
              : Flag.position.y + 0.15,
          duration: 1,
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [triggerMoving, three.scene]);

  useEffect(() => {
    if (!backFromGaming) return;

    let animationFrameId: number;

    const animateBack = () => {
      const Hill = three.scene.getObjectByName("hill");
      const Flag = three.scene.getObjectByName("flag");

      if (Hill && Flag) {
        const HillY = window.innerWidth < 600 ? -4.2 : -3.6;
        const HillZ = 6.8;

        const FlagY = window.innerWidth < 600 ? -0.5 : 0;
        const FlagZ = 2.1;

        gsap.to(Hill.position, {
          y: HillY,
          z: HillZ,
          duration: 1,
        });
        gsap.to(Flag.position, {
          y: FlagY,
          z: FlagZ,
          duration: 1,
        });
      }
      animationFrameId = requestAnimationFrame(animateBack);
    };

    animateBack();

    return () => cancelAnimationFrame(animationFrameId);
  }, [backFromGaming, three.scene]);

  const memoCloudVariants = useMemo(() => cloudVariants, []);
  const memoVariants = useMemo(() => variants, []);

  return (
    <Scroll html>
      <div>
        <motion.img
          height={500}
          width={500}
          className="absolute left-0 bottom-1/2 -z-10 w-[500px] h-[500px] opacity-[0.6]"
          src="/assets/cloud.webp"
          alt="cloud"
          initial="notScaled"
          animate={isPositionChanged || showPortfolio ? "scaled" : "notScaled"}
          variants={memoCloudVariants}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial="closed"
          animate={!isPositionChanged && !showPortfolio ? "open" : "closed"}
          variants={memoVariants}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<div>Loading section...</div>}>
            <SectionOne />
            <SectionTwo />
            <SectionFour />
            <SectionThree />
            <SectionFive />
            <ToolBar
              setIsPositionChanged={setIsPositionChanged}
              setIsScrollDisabled={setIsScrollDisabled}
              setShowPortfolio={setShowPortfolio}
              setAnimating={setAnimating}
            />
          </Suspense>
        </motion.div>
      </div>
    </Scroll>
  );
}

export default ScrollTexts;

export const Section = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string }>
>(({ children, className }, ref) => {
  return (
    <section
      ref={ref}
      className={`h-screen w-screen p-8 md:p-14 max-w-screen-lg flex justify-center flex-col ${className}`}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
