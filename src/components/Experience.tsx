"use client";
import { ScrollControls, Environment, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  lazy,
} from "react";
import gsap from "gsap";
import ScrollTexts from "./ScrollTexts";
import Particales from "./Particales";
import BrainstormGaming from "./BrainstormGaming";
import { motion } from "framer-motion";
import About from "./About";

const pagesCount = 4.5;

const Hill = lazy(() => import("./Hill"));
const Flag = lazy(() => import("./Flag"));

function Experience() {
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isPositionChanged, setIsPositionChanged] = useState(false);
  const [triggerMoving, setTriggerMoving] = useState(false);
  const [backFromGaming, setBackFromGaming] = useState(false);
  const [animating, setAnimating] = useState(false);
  const wrapperDiv = useRef<any>();

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

  useEffect(() => {
    setTimeout(() => {
      if (showPortfolio || isPositionChanged) {
        wrapperDiv.current?.classList.add("fixed");
        wrapperDiv.current?.classList.add("-z-[1]");
        wrapperDiv.current?.classList.add("w-full");
      } else {
        wrapperDiv.current?.classList.remove("fixed");
        wrapperDiv.current?.classList.remove("-z-[1]");
        wrapperDiv.current?.classList.remove("w-full");
      }
    }, 150);
  }, [showPortfolio, isPositionChanged]);

  return (
    <div className="">
      <div ref={wrapperDiv}>
        <Canvas style={{ height: "100vh" }}>
          <ScrollControls
            // enabled={!isScrollDisabled}
            pages={isScrollDisabled ? 0 : pagesCount}
            damping={0.25}
          >
            <Environment files="/models/env-2_11zon.jpg" />
            <ModelGroup />
            {window.innerWidth > 600 && <Particales />}
            <ScrollTexts
              setIsScrollDisabled={setIsScrollDisabled}
              isScrollDisabled={isScrollDisabled}
              showPortfolio={showPortfolio}
              setShowPortfolio={setShowPortfolio}
              triggerMoving={triggerMoving}
              setIsPositionChanged={setIsPositionChanged}
              isPositionChanged={isPositionChanged}
              backFromGaming={backFromGaming}
              setAnimating={setAnimating}
            />
          </ScrollControls>
        </Canvas>
      </div>

      <motion.div
        initial="closed"
        animate={showPortfolio ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className={`overflow-hidden`}
      >
        <BrainstormGaming
          setIsPortfolio={setShowPortfolio}
          setIsScrollDisabled={setIsScrollDisabled}
          setBackFromGaming={setBackFromGaming}
          animating={animating}
        />
      </motion.div>

      <motion.div
        initial="closed"
        animate={isPositionChanged ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="overflow-auto"
      >
        <About
          setIsPositionChanged={setIsPositionChanged}
          isPositionChanged={isPositionChanged}
          setIsScrollDisabled={setIsScrollDisabled}
          setTriggerMoving={setTriggerMoving}
          setShowPortfolio={setShowPortfolio}
          setAnimating={setAnimating}
        />
      </motion.div>
    </div>
  );
}

export default Experience;

const ModelGroup = () => {
  const group = useRef<Group>(null);
  const tl = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    // Check if you've reached the end of the page
    if (scroll.pages <= pagesCount) {
      // Calculate the background position as a percentage
      const backgroundPositionX = `${(scroll.offset / 3) * 20}%`;

      // Update the background position style
      (document.querySelector("#bg") as HTMLDivElement)?.style.setProperty(
        "background-position-x",
        backgroundPositionX
      );
    }

    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    if (group.current) {
      tl.current.to(
        group.current.position,
        {
          duration: 2,
          // z: 3.4 * (5 - 1),
          x: -10,
          // y: 2.6,
        },
        0
      );
    }
  }, []);

  return (
    <group ref={group} name="objectsgroup">
      <Suspense fallback={null}>
        <Hill />
        <Flag />
      </Suspense>
    </group>
  );
};
