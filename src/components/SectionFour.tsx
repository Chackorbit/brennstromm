import { Section } from "./ScrollTexts";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

function SectionFour() {
  const scroll = useScroll();
  const { t } = useTranslation();
  const isDesktop = useRef(false);

  useEffect(() => {
    const checkScreenSize = () => {
      isDesktop.current = window.innerWidth > 600;
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useFrame(() => {
    const scaleFactor = scroll.offset * 16;
    const clampedScaleFactor = Math.max(1, scaleFactor);

    const cloudElement = document.querySelector(
      "#cloud2"
    ) as HTMLDivElement | null;
    if (cloudElement) {
      cloudElement.style.transform = `scale(${clampedScaleFactor})`;
    }
  });

  const MotionH3 = isDesktop.current ? motion.h3 : "h3";
  const MotionH4 = isDesktop.current ? motion.h4 : "h4";
  const MotionP = isDesktop.current ? motion.p : "p";

  return (
    <Section>
      <div className="relative">
        <img
          loading="lazy"
          height={500}
          width={500}
          className="absolute left-0 -bottom-56 -z-10"
          src="/assets/cloud.webp"
          alt="cloud"
          id="cloud2"
        />
      </div>

      <div>
        <div className="mb-6">
          <MotionH3
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            }}
            className="text-3xl md:text-5xl font-bold mb-10"
          >
            {t("SectionFourTitle")}
          </MotionH3>

          <MotionH4
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.4 },
            }}
            className="text-xl md:text-3xl font-bold mb-4"
          >
            {t("SectionFourTitle3")}
          </MotionH4>

          <MotionP
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            className="text-xl my-5"
          >
            {t("SectionFourText")}
          </MotionP>

          <MotionP
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.6 },
            }}
            className="text-xl"
          >
            {t("SectionFourText2")}
          </MotionP>

          <div className="mt-10">
            <MotionH4
              initial={{ y: 70, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.7 },
              }}
              className="text-xl md:text-3xl font-bold"
            >
              {t("SectionFourTitle4")}
            </MotionH4>

            <MotionP
              initial={{ y: 70, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.8 },
              }}
              className="text-xl mt-5"
            >
              {t("SectionFourText4")}
            </MotionP>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionFour;
