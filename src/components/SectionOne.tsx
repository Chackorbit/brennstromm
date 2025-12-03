import { Section } from "./ScrollTexts";
import { useTranslation } from "react-i18next";

function SectionOne() {
  const { t } = useTranslation();

  return (
    <Section className="!justify-start" aria-label="About company section">
      <div className="h-full flex flex-col justify-center max-md:pt-14 max-md:mb-64">
        <div className="mb-1">
          <img
            loading="lazy"
            className="logo"
            src="/assets/customer-logo.webp"
            alt="Customer company logo"
            width="120"
            height="32"
          />
        </div>
        <h1 className="ml-[2px] text-xl md:text-3xl">
          <span className="font-bold">{t("Outsourcing")}</span>{" "}
          {t("SectionOneText")}
        </h1>
      </div>
    </Section>
  );
}

export default SectionOne;
