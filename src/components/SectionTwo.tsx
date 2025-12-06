import { useState, useRef, useEffect } from "react";
import { Section } from "./ScrollTexts";
import { motion } from "framer-motion";
import { Modal } from "antd";
import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

function SectionTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const scroll = useScroll();
  const isDesktop = useRef(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    const checkScreenSize = () => {
      isDesktop.current = window.innerWidth > 600;
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useFrame(() => {
    const scaleFactor = scroll.offset * 20;
    const clampedScaleFactor = Math.max(1, scaleFactor);

    const cloudElement = document.querySelector(
      "#cloud-section-two"
    ) as HTMLDivElement | null;
    if (cloudElement) {
      cloudElement.style.transform = `scale(${clampedScaleFactor})`;
    }
  });

  // ✅ На мобільних - звичайні div (видимі одразу)
  // ✅ На desktop - motion з анімацією
  const TextAnimation = isDesktop.current ? motion.h2 : "h2";
  const TextAnimationP = isDesktop.current ? motion.p : "p";
  const ButtonWrapper = isDesktop.current ? motion.div : "div";

  return (
    <Section>
      <div className="relative">
        <img
          loading="lazy"
          height={500}
          width={500}
          className="absolute left-0 bottom-1/2 -z-10"
          src="/assets/cloud.webp"
          alt="cloud"
          id="cloud-section-two"
        />

        {/* ✅ Desktop: анімація | Мобільний: видно одразу */}
        <TextAnimation
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.4 } }}
          className="text-5xl font-bold mb-4"
        >
          {t("SectionTwoTitle")}
        </TextAnimation>

        <TextAnimationP
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.5 },
          }}
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: t("SectionTwoText") }}
        />

        <TextAnimationP
          className="text-2xl mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.8 },
          }}
        >
          {t("SectionTwoText2")}
        </TextAnimationP>
      </div>

      <ButtonWrapper
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 0.7 },
        }}
      >
        <button
          onClick={toggleModal}
          className="rounded-lg bg-black text-white py-3 px-3 text-lg mt-6 hover:scale-110 transition-transform"
        >
          {t("SectionTwoButton")}
        </button>
      </ButtonWrapper>

      <Modal
        title={<h4 className="text-3xl mb-5">{t("ModalTitle")}</h4>}
        open={isModalOpen}
        centered
        footer={null}
        onCancel={toggleModal}
      >
        <ModalContent />
      </Modal>
    </Section>
  );
}

export default SectionTwo;
