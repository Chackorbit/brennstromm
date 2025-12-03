import { useState } from "react";
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

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useFrame(() => {
    // Calculate the scale factor based on scroll position, starting from 0
    const scaleFactor = scroll.offset * 20; // Adjust the factor as needed

    // Ensure the scale factor is at least 1
    const clampedScaleFactor = Math.max(1, scaleFactor);

    // Update the element's scale using CSS transform
    const cloudElement = document.querySelector(
      "#cloud-section-two"
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
          className="absolute left-0 bottom-1/2 -z-10"
          src="/assets/cloud.webp"
          alt="cloud"
          id="cloud-section-two"
        />

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.4 } }}
          className="text-5xl font-bold mb-4"
        >
          {t("SectionTwoTitle")}
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.5 },
          }}
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: t("SectionTwoText") }}
        />

        <motion.p
          className="text-2xl mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.8 },
          }}
        >
          {t("SectionTwoText2")}
        </motion.p>
      </div>
      <motion.div
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
      </motion.div>

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
