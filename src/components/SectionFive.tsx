import { useState } from "react";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { Modal } from "antd";
import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";

function SectionFive() {
  const scroll = useScroll();
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const backTopTopHandler = () => {
    gsap.to(scroll.el, {
      duration: 1,
      scrollTop: 0,
    });
  };

  return (
    <section className="w-screen h-[50vh] flex justify-center flex-col">
      <Modal
        title={<h4 className="text-3xl mb-5">{t("ModalTitle")}</h4>}
        open={isModalOpen}
        centered
        footer={null}
        onCancel={toggleModal}
      >
        <ModalContent />
      </Modal>

      <div className="relative h-full">
        <footer
          className="bg-[url('/assets/footer-mountain.webp')] md:bg-cover bg-no-repeat p-10 flex flex-col justify-end items-center h-[300px] gap-3 z-30 absolute w-full bottom-0"
          style={{ backgroundPosition: "0% 10%" }}
        >
          <h3 className="text-xl md:text-3xl font-bold">{t("FooterTitle")}</h3>
          <p className="text-md md:text-xl ">{t("FooterText")}</p>
          {/* <AiFillLinkedin className="footer_icon" />
      <button>
        <span>
          <FaDownload />
        </span>
        Download PDF Contact form
      </button>
      <div className="footer_box">
        <HiOutlineMail />
        <p>simon@brennstrom.no</p>
      </div> */}
          <div className="flex gap-5">
            <button
              className="border border-black rounded-lg px-4 py-2 hover:text-white hover:bg-black transition-colors" /* onClick={() => setIsContactForm(true)} */
              onClick={toggleModal}
            >
              {t("FooterButton1")}
            </button>
            <button
              className="border border-black rounded-lg px-4 py-2 hover:text-white hover:bg-black transition-colors"
              onClick={backTopTopHandler}
            >
              {t("FooterButton2")}
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default SectionFive;
