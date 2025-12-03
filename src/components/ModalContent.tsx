import { useTranslation } from "react-i18next";


function ModalContent() {
  const {t} = useTranslation()
  return (
    <form
      action="https://formsubmit.co/simon@brennstrom.no"
      method="POST"
      // data-open={isContactForm}
      className="contact"
    >
      <div>
        <input type="hidden" name="_template" value="table" />
      </div>
      <div>
        <input
          type="text"
          className="border-b w-full mb-5 text-xl"
          name="name"
          placeholder={t("ModalFirstInput")}
        />
      </div>
      <div>
        <input
          type="email"
          className="border-b w-full mb-5 text-xl"
          name="email"
          placeholder={t("ModalSecondInput")}
        />
      </div>
      <div>
        <textarea
          rows={4}
          className="border-b w-full mb-5 text-xl"
          name="message"
          placeholder={t("ModalThirdInput")}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black h-[45px] w-fit text-white border-none self-end rounded-lg cursor-pointer transition-colors px-4"
        >
          {t("ModalSendButton")}
        </button>
      </div>
    </form>
  );
}

export default ModalContent;
