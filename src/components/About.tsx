import { Dispatch, useState } from "react";
import { Button } from "./ToolBar";
import { Modal } from "antd";
import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";
import gsap, { Power1 } from "gsap";

type Props = {
  setIsPositionChanged: Dispatch<boolean>;
  isPositionChanged: boolean;
  setIsScrollDisabled: Dispatch<boolean>;
  setTriggerMoving: Dispatch<boolean>;
  setShowPortfolio: Dispatch<boolean>;
  setAnimating: Dispatch<boolean>;
};

function About({
  setIsPositionChanged,
  setIsScrollDisabled,
  setTriggerMoving,
  setAnimating,
  setShowPortfolio,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const [, setIsMuted] = useState<boolean>(false);

  const backHorizontalChangeHandler = () => {
    setIsPositionChanged(false);
    setIsScrollDisabled(false);

    setTriggerMoving(true);
    setTimeout(() => {
      setTriggerMoving(false);
    }, 400);
  };

  const redirectionWithAnimation = (link: string) => {
    stop();
    changeMuted(false);

    var bg = document.querySelector("#bg");
    var video: any = document.querySelector("#animationVideo");
    setAnimating(true);

    setTimeout(() => {
      gsap.to(bg, {
        webkitFilter: "brightness(3)",
        duration: 1.5,
        ease: Power1.easeIn,
      });
      gsap.to(bg, {
        webkitFilter: "brightness(3)",
        duration: 1.5,
        ease: Power1.easeIn,
        onComplete: () => {
          video.play();
          video.onended = function () {
            // setAnimating(false);

            window.location.href = link;
          };
        },
      });
      setTimeout(() => {
        setShowPortfolio(true);
      }, 1000);
    }, 500);

    setIsScrollDisabled(true);
  };

  const changeMuted = (value: boolean) => {
    setIsMuted(value);
  };
  return (
    <section className="md:gap-9 flex justify-start flex-col md:flex-row md:p-12">
      <Modal
        title={<h4 className="text-3xl mb-5">{t("ModalTitle")}</h4>}
        open={isModalOpen}
        centered
        footer={null}
        onCancel={toggleModal}
      >
        <ModalContent />
      </Modal>

      <div
        className="max-md:py-8 max-md:px-5 md:mb-6 hidden md:block" /* flex-1 max-md:hidden  */
      >
        <Button className="py-2" onClick={backHorizontalChangeHandler}>
          {t("SectionSixBackButton")}
        </Button>
      </div>
      <div className="flex-1">
        {/* <div className="w-full md:hidden">
          <div className="">
            <img loading="lazy"
              src={
                i18n.resolvedLanguage == "en"
                  ? "/assets/apply-ai-Mobile-English.png"
                  : "/assets/apply-ai-Mobile-Norwegian.png"
              }
              alt=""
            />
          <div className="h-16 bg-black w-full"></div>
          </div>

        </div> */}

        <div className="max-md:p-6 max-w-5xl" /* hidden md:block */>
          <div className="mb-4">
            <h2 className="text-3xl xl:text-4xl md:max-w-[70%] font-bold mb-3">
              {t("SectionSixTitle")}
            </h2>
            <p
              className="text-base xl:text-2xl"
              dangerouslySetInnerHTML={{ __html: t("SectionSixText") }}
            ></p>
            <p
              className="text-base xl:text-2xl my-5"
              dangerouslySetInnerHTML={{ __html: t("SectionSixText2") }}
            ></p>
            {window.innerWidth < 1280 ? (
              <p
                className="text-base xl:text-lg my-5"
                dangerouslySetInnerHTML={{ __html: t("SectionSixText3") }}
              ></p>
            ) : (
              <div>
                <span className="text-2xl">We work with:</span>
                <div className="flex gap-5 mt-4 mb-8">
                  <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-2 gap-3 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg cursor-pointer hover:scale-[1.05] transition-[0.1]">
                    <img
                      loading="lazy"
                      src="assets/social-icons/google-ads.png"
                      className="w-20"
                    />
                    <span className="text-center">Google Ads</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-2 gap-3 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg cursor-pointer hover:scale-[1.05] transition-[0.1]">
                    <img
                      loading="lazy"
                      src="assets/social-icons/seo.png"
                      className="w-20"
                    />
                    <span className="text-center">AEO, GEO and SEO</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-2 gap-3 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg cursor-pointer hover:scale-[1.05] transition-[0.1]">
                    <img
                      loading="lazy"
                      src="assets/social-icons/meta.png"
                      className="w-20"
                    />
                    <span className="text-center">Instagram/Facebook</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-2 gap-3 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg cursor-pointer hover:scale-[1.05] transition-[0.1]">
                    <img
                      loading="lazy"
                      src="assets/social-icons/tiktok.png"
                      className="w-20"
                    />
                    <span className="text-center">TikTok</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-2 gap-3 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg cursor-pointer hover:scale-[1.05] transition-[0.1]">
                    <img
                      loading="lazy"
                      src="assets/social-icons/website.png"
                      className="w-20"
                    />
                    <span className="text-center">Website development</span>
                  </div>
                </div>

                {/* <div className="flex gap-5 mt-2 mb-5">
            <div className="flex flex-col justify-center items-center border border-red-400 p-5">
              <img loading="lazy" src="assets/social-icons/google-ads.png" className="w-20"/>
              <span className="">Google Ads</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 border border-red-400 p-5">
              <img loading="lazy" src="assets/social-icons/seo.png" className="w-20"/>
              <span className="">AEO, GEO and SEO</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 border border-red-400 p-5">
              <img loading="lazy" src="assets/social-icons/meta.png" className="w-20"/>
              <span className="">Instagram/Facebook</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 border border-red-400 p-5">
              <img loading="lazy" src="assets/social-icons/tiktok.png" className="w-20"/>
              <span className="">TikTok</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 border border-red-400 p-5">
              <img loading="lazy" src="assets/social-icons/website.png" className="w-20"/>
              <span className="">Website development</span>
            </div>
          </div> */}
              </div>
            )}
            <p
              className="text-base xl:text-2xl my-5 font-bold"
              dangerouslySetInnerHTML={{ __html: t("SectionSixText4") }}
            ></p>
          </div>
          <div>
            <div className="flex justify-end md:justify-start mt-6 gap-5">
              <Button
                className="py-2 md:hidden"
                onClick={backHorizontalChangeHandler}
              >
                {t("SectionSixBackButton")}
              </Button>
              <Button onClick={toggleModal} className="py-2">
                {t("SectionSixButton")}
              </Button>
            </div>
          </div>

          <div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 57 23"
              className="logo-icon tw-text-brand tw-w-6"
            >
              <path
                fill="currentColor"
                d="M4.695.391H0v22.141h4.695zm12.899 22.141h4.695V7.011h-4.695zm12.159 0h5.413l5.413-15.521h-4.662s-2.544 8.445-3.293 11.119h-.066c-.75-2.674-3.326-11.119-3.326-11.119h-4.956zm-23.537-8.31c7.37 0 9.092-6.158 9.092-7.21h-.637c-7.372 0-9.094 6.157-9.094 7.21zm-.639.969c0 1.117 1.276 7.403 9.222 7.403h.638c0-1.119-1.277-7.403-9.221-7.403zM22.746 2.739C22.746 1.272 21.671 0 19.941 0c-1.727 0-2.804 1.272-2.804 2.739 0 1.468 1.077 2.739 2.804 2.739 1.73 0 2.805-1.271 2.805-2.739M57 7.011h-4.532V9.13c-.783-1.631-2.608-2.543-4.729-2.543-3.848 0-6.88 3.129-6.88 8.184 0 5.087 2.935 8.185 6.652 8.185 2.608 0 4.173-1.272 4.956-2.675v2.25H57zm-4.663 8.151c0 2.871-1.76 4.208-3.522 4.208-1.924 0-3.163-1.956-3.163-4.598 0-2.608 1.305-4.598 3.326-4.598 1.663 0 3.359 1.37 3.359 4.206z"
              ></path>
            </svg> */}
            <div className="logo-icons">
              <button
                onClick={() => {
                  backHorizontalChangeHandler();

                  setTimeout(() => {
                    redirectionWithAnimation(
                      "https://www.kiva.org/team/brennstrm_impact"
                    );
                  }, 500);
                }}
              >
                <img src="/public/assets/kiva.png" alt="kiva" />
              </button>

              <button
                onClick={() => {
                  backHorizontalChangeHandler();

                  setTimeout(() => {
                    redirectionWithAnimation("https://norafriends.com/");
                  }, 500);
                }}
              >
                <img src="/public/assets/yellow-heart.png" alt="yellow heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
