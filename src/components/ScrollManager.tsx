import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { Dispatch, useEffect, useRef } from "react";

type Props = {
  section: number;
  onSectionChange: Dispatch<number>;
};

function ScrollManager({ section, onSectionChange }: Props) {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const fillRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (data.fill && fillRef.current !== data.fill) {
      data.fill.classList.add("top-0", "absolute");
      fillRef.current = data.fill;
    }
  }, [data.fill]);

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, data.el]);

  useFrame(() => {
    // Safely read a numeric scroll value from the possibly-typed-away property
    const scrollCurrent =
      typeof (data as any).scroll?.current === "number"
        ? (data as any).scroll.current
        : typeof (data as any).offset === "number"
        ? (data as any).offset
        : Array.isArray((data as any).offset)
        ? (data as any).offset[1]
        : 0;

    if (isAnimating.current) {
      lastScroll.current = scrollCurrent;
      return;
    }

    const curSection = Math.floor(scrollCurrent * data.pages);

    if (curSection !== section) {
      onSectionChange(curSection);
    }

    lastScroll.current = scrollCurrent;
  });

  return null;
}

export default ScrollManager;
