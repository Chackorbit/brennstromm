import { Section } from "./ScrollTexts";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function SectionFour() {
  const scroll = useScroll();
  const { t } = useTranslation();

  useFrame(() => {
    // Calculate the scale factor based on scroll position, starting from 0
    const scaleFactor = scroll.offset * 16; // Adjust the factor as needed

    // Ensure the scale factor is at least 1
    const clampedScaleFactor = Math.max(1, scaleFactor);

    // Update the element's scale using CSS transform
    const cloudElement = document.querySelector(
      "#cloud2"
    ) as HTMLDivElement | null;

    if (cloudElement) {
      cloudElement.style.transform = `scale(${clampedScaleFactor})`;
    }
  });

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
          <motion.h3
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            }}
            className="text-3xl md:text-5xl font-bold mb-10"
          >
            {t("SectionFourTitle")}
          </motion.h3>

          <motion.h4
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.4 },
            }}
            className="text-xl md:text-3xl font-bold mb-4"
          >
            {t("SectionFourTitle3")}
          </motion.h4>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            className="text-xl my-5"
          >
            {t("SectionFourText")}
          </motion.p>
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.6 },
            }}
            className="text-xl"
          >
            {t("SectionFourText2")}
          </motion.p>

          <div className="mt-10">
            <motion.h4
              initial={{ y: 70, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.7 },
              }}
              className="text-xl md:text-3xl font-bold"
            >
              {t("SectionFourTitle4")}
            </motion.h4>
            <motion.p
              initial={{ y: 70, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.8 },
              }}
              className="text-xl mt-5"
            >
              {t("SectionFourText4")}
            </motion.p>
          </div>
        </div>
        {/* <div className="mb-3">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.7 },
            }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t("SectionFourTitle2")}
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1 },
            }}
            className="text-xl"
          >
            {t("SectionFourText2")}
          </motion.p>
        </div> */}

        {/* <div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1.1 },
            }}
            className="font-semibold text-xl"
          >
            {t("SectionFourText3")}
          </motion.p>
        </div> */}
      </div>
    </Section>
  );
}

export default SectionFour;
