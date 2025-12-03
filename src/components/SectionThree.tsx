// import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function SectionThree() {
  // const scroll = useScroll();
  const { t } = useTranslation();

  useFrame(() => {
    // Calculate the scale factor based on scroll position, starting from 0
    // const scaleFactor = scroll.offset * 8; // Adjust the factor as needed

    // Ensure the scale factor is at least 1
    // const clampedScaleFactor = Math.max(1, scaleFactor);

    // Update the element's scale using CSS transform
    const cloudElement = document.querySelector(
      "#cloud"
    ) as HTMLDivElement | null;

    if (cloudElement) {
      // cloudElement.style.transform = `scale(${clampedScaleFactor})`;
    }
  });

  return (
    <section className="h-screen w-screen px-8 md:px-14 max-w-screen-2xl mx-auto flex justify-center flex-col">
      <div className="relative">
        <img
          loading="lazy"
          height={500}
          width={500}
          className="absolute left-0 bottom-1/2 -z-10"
          src="/assets/cloud.webp"
          alt="cloud"
          id="cloud"
        />

        <motion.div
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

          {/* <div className=" mt-6">
            <div className=" flex justify-center items-center">
              <img loading="lazy"
                width={600}
                height={180}
                className=""
                src="/logos/3.png"
                alt="customer"
              />
            </div>
          </div> */}

          {/* <div className="section-2_grid">
            <img loading="lazy" className="logo-2" src="/logos/2.png" alt="customer" />
            <img loading="lazy" className="logo-1" src="/logos/1.png" alt="customer" />
            <img loading="lazy" className="logo-1" src="/logos/5.png" alt="customer" />

            <img loading="lazy" className="logo-6" src="/logos/9.png" alt="customer" />
            <img loading="lazy" className="logo-6" src="/logos/7.png" alt="customer" />
            <img loading="lazy" className="logo-6" src="/logos/8.png" alt="customer" />
            <img loading="lazy" className="logo-6" src="/logos/6.png" alt="customer" />
            <img loading="lazy" className="logo-3 sp-logo" src="/logos/3.png" alt="customer" />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default SectionThree;
