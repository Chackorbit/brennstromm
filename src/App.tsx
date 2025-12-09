import Experience from "./components/Experience";
import { Suspense } from "react";
import "./App.css";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

function App() {
  return (
    <main className="h-screen">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <img loading="lazy" src="/assets/loader.gif" alt="loader" />
          </div>
        }
      >
        <Experience />
        <CookieConsentBanner />
        <div
          id="bg"
          className="max-md:bg-no-repeat max-md:bg-cover fixed -z-10 inset-0 h-screen w-screen bg-[url('/assets/bg.webp')] bg-custom brightness-100"
        />
      </Suspense>
    </main>
  );
}

export default App;
