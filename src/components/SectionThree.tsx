import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useFrame } from "@react-three/fiber";

function SectionThree() {
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
    const cloudElement = document.querySelector(
      "#cloud"
    ) as HTMLDivElement | null;
    if (cloudElement) {
      // cloudElement.style.transform = `scale(${clampedScaleFactor})`;
    }
  });

  const ContentWrapper = isDesktop.current ? motion.div : "div";

  return (
    <section className="relative h-screen w-screen px-8 md:px-14 max-w-screen-2xl mx-auto flex justify-center flex-col">
      <img
        loading="lazy"
        height={1100}
        width={500}
        className="absolute h-[100%] top-[8%] left-0 bottom-1/2 -z-10 w-full object-cover"
        src="/assets/cloud.webp"
        alt="cloud"
        id="cloud"
      />
      <div className="relative">
        <ContentWrapper
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.4 } }}
        >
          <h2 className="text-6xl font-semibold text-center mb-7">
            {t("SectionThreeTitle")}
          </h2>

          <div className="max-md:hidden grid grid-cols-4 gap-5 items-center">
            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={360}
                height={180}
                className=""
                src="/logos/2.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={200}
                height={300}
                className=""
                src="/logos/1.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={200}
                height={300}
                className=""
                src="/logos/5.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                width={230}
                height={180}
                className=""
                src="/logos/7.png"
                alt="customer"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden grid grid-cols-2 gap-10 items-center">
            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={360}
                height={180}
                className=""
                src="/logos/2.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={200}
                height={300}
                className=""
                src="/logos/5.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-end">
              <img
                loading="lazy"
                width={200}
                height={300}
                className=""
                src="/logos/1.png"
                alt="customer"
              />
            </div>

            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                width={230}
                height={180}
                className=""
                src="/logos/7.png"
                alt="customer"
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
}

export default SectionThree;
