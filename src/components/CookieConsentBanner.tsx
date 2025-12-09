// CookieConsentBanner.tsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { enableAdsTracking } from "../analytics";

const CONSENT_KEY = "cookie_consent";

type Consent = "accepted" | "declined" | null;

export const CookieConsentBanner = () => {
  const { t } = useTranslation();
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
      if (stored === "accepted") enableAdsTracking();
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_KEY, "accepted");
    }
    enableAdsTracking();
  };

  const handleDecline = () => {
    setConsent("declined");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_KEY, "declined");
    }
  };

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm text-white md:px-6">
        <div className="max-w-xl">
          <h2 className="mb-1 font-semibold">{t("cookie_title")}</h2>
          <p className="text-white/80">{t("cookie_description")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-gradient-to-r bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95"
          >
            {t("cookie_accept")}
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10 active:scale-95"
          >
            {t("cookie_decline")}
          </button>
        </div>
      </div>
    </div>
  );
};
