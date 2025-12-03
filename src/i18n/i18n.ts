// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Articles: "Articles",
        BrainstormGaming: "Brainstorm Gaming",
        About: "About Us",
        Outsourcing: "", //"Outsourcing",
        SectionOneText: " Marketing & Consultancy Services",
        SectionTwoTitle: "Practical Psychology",
        SectionTwoText:
          "It matters how consumers view and interact with your brand. Join other large companies in implementing <span style='font-weight: bold'>psychological models</span> to shape the <span style='font-weight: bold'>user experience & interface</span> of your platform.",
        SectionTwoText2: "Let’s take a look at your project.",
        SectionTwoButton: "Request Consultancy",
        ModalTitle: "Contact",
        ModalFirstInput: "Name",
        ModalSecondInput: "Email",
        ModalThirdInput: "Message",
        ModalSendButton: "Send Message",
        SectionThreeTitle: "Our Customers",
        SectionFourTitle: "Our services",
        SectionFourTitle3: "Courses and lectures",
        SectionFourTitle4: "Project management",
        SectionFourText:
          "We deliver courses and lectures for private and public business. Our speciality is implementation of AI- solutions in corporate workflow and fundamental psychological mechanisms within branding and marketing.",
        SectionFourText2:
          "For busy professionals we can also adapt our course content to a individual office to office version.",
        SectionFourText3:
          "Let us empower your success through our global partnerships.",
        SectionFourText4:
          "We offer consultancy services to projects who need psychological insight or adaption of their platform.",
        FooterTitle: "How to get in touch:",
        FooterText: "Use the contact form for business inquiries.",
        FooterButton1: "Contact Now",
        FooterButton2: "Back To Top",
        // SectionSixTitle:
        //   "Maximize Efficiency with a Practical use of AI Course.",
        // SectionSixTitle2: "Course topics include:",
        // SectionSixText:
        //   "Harness the power of AIs like ChatGPT, Midjourney, IBM Watson and Runway to increase efficiency and profitability with Brennstrom's applied AI course. This course provides a brief and easy to understand introduction to AI, along with practical and applicable skills to maximize productivity and reduce time spent on mundane tasks. It focuses on the individual to ensure each employee walks away with new skills and valuable knowledge.",
        // SectionSixListItem1: "An introduction to what AI is and isn’t.",
        // SectionSixListItem2:
        //   "One-on-one instruction in practical and applicable skills to increase productivity and reduce time spent on mundane tasks.",
        // SectionSixListItem3:
        //   "General use and content production skills (how AI can expand on available competence).",
        // SectionSixButton: "Contact Now",
        // SectionSixBackButton: "Back",
        SectionSixTitle: "About Us",
        SectionSixText: `Brennstrøm is a marketing firm that handles the complete spectrum of digital marketing and brand development. We manage campaigns, create content, and build brands across all major platforms.`,
        // `At <span class="text-3xl">Brennstrøm Consult</span>, we blend practical <span class="text-2xl">psychology</span> with <span class="text-2xl">game</span> <span class="text-2xl text-[#ff0000]">design</span> and technology to craft digital <span class="text-2xl">platforms</span> that resonate with its users. Since 2016, we've honed our skills in <span class="text-3xl text-[#ff0000]">optimizing</span> user experiences and interfaces, implementing psychological models that transform how consumers <span class="text-2xl">perceive</span> and engage with brands. Our <span class="text-2xl text-[#ff0000]">journey</span> began with web design, but we've since ventured into more <span class="text-3xl text-[#ff0000]">complex</span> territories of user experience and platform development, always with an eye on <span class="text-2xl">creating</span> technology that's both <span class="text-2xl italic">functional</span> and deeply <span class="text-2xl italic">meaningful</span>.`,
        SectionSixText2: `Our services cover the full marketing cycle from strategy to execution. We design websites, create logos, manage advertising campaigns, and produce content that connects with your audience.`,
        // `Our true <span class="text-2xl text-[#ff0000]">passion</span> lies in developing games that do more than entertain—they <span class="text-2xl">prepare</span> young adults for the gritty <span class="text-2xl">realities</span> of life. In every project, whether it's a <span class="text-2xl">sleek</span> interface or an <span class="text-3xl text-[#ff0000]">immersive</span> game world, we shape technology to serve a <span class="text-2xl italic">purpose</span>, to <span class="text-2xl">connect</span>, to <span class="text-2xl">matter</span>. This is not just work for us; it's a <span class="text-2xl">mission</span> to make the digital <span class="text-3xl text-[#ff0000]">worlds</span> more human, more <span class="text-2xl text-[#ff0000]">impact</span><span class="text-2xl">ful</span>, one project at a time.`,
        SectionSixText3: `<span class="text-2xl">We work with:</span>
        <ul>
        <li class="flex items-center gap-2 mt-2"><img loading="lazy" src="assets/social-icons/google-ads.png" class="w-8"/>Google Ads</li>
        <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/seo.png" class="w-8"/>AEO, GEO and SEO</li>
         <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/meta.png" class="w-8"/>Instagram/Facebook</li>
         <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/tiktok.png" class="w-8"/>TikTok</li>
          <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/website.png" class="w-8"/>Website development</li>
        </ul>`,
        SectionSixText4: `Whether you need a complete rebrand or targeted campaign management, we deliver measurable results through marketing based on the current best practice.`,
        SectionSixButton: "Contact Now",
        SectionSixBackButton: "Back",
      },
    },
    no: {
      translation: {
        Articles: "Artikler",
        BrainstormGaming: "Brainstorm Gaming",
        About: "Om Oss",
        Outsourcing: "", //"Problemløsning",
        SectionOneText: "Markedsføring & Konsulenttjenester",
        SectionTwoTitle: "Direkte problemløsning",
        SectionTwoText:
          "Brennstrøm hjelper ledere og organisasjoner med problemløsning og psykologisk tilpasning av plattformer og merkevarer.",
        SectionTwoText2:
          "Vi bistår også i kompetanseutvikling for dine ansatte. Send oss din kontaktinformasjon og vi kontakter deg innen kort tid.", // "Outsource dine problemer til oss.",
        SectionTwoButton: "Ta kontakt",
        ModalTitle: "Etterspør Konsultasjon",
        ModalFirstInput: "Ditt navn",
        ModalSecondInput: "Epost",
        ModalThirdInput: "Oppsummer problemstilling",
        ModalSendButton: "Send",
        SectionThreeTitle: "Våre kunder",
        SectionFourTitle: "Våre tjenester",
        SectionFourTitle3: "Kurs og foredrag",
        SectionFourTitle4: "Prosjektassistanse",
        SectionFourText:
          "Brennstrøm leverer kurs og foredrag for privat og offentlig næringsliv. Vi spesialiserer oss på implementasjon av kunstig intelligens og grunnleggende psykologiske mekanismer i merkevarebygging og markedsføring.",
        SectionFourText2:
          "Vi kan også formidle kursinnhold på kontornivå hvor hvert individ får innholdet tilpasset sitt kompetansenivå og bruksformål",
        SectionFourText3:
          "La oss styrke din suksess gjennom våre globale partnerskap.",
        SectionFourText4:
          "Vi tilbyr konsulenttjenester til prosjekter som trenger psykologisk kompetanse.",
        FooterTitle: "Fortell oss om din problemstilling:",
        FooterText: "Vi svarer innen 2-3 arbeidsdager.",
        FooterButton1: "Kontakt Oss",
        FooterButton2: "Tilbake",
        // SectionSixTitle:
        //   "Oppnå økt effektivitet og lønnsomhet med kunstig intelligens.",
        // SectionSixTitle2: "Kurset inkluderer:",
        // SectionSixText:
        //   "Kunstig intelligens er en teknologi som har vokst sterkt de siste årene. AI-plattformer som ChatGPT, Midjourney, IBM Watson og Runway gir bedriften din betydelige konkurransefortrinn og økt effektivitet og lønnsomhet. Brennstrøm tilbyr kurs i praktisk bruk av AI, et kort og lettlært lynkurs som lærer deg hvordan du bruker den nyeste AI-teknologien.",
        // SectionSixListItem1:
        //   "En innføring i hva kunstig intelligens er og ikke er",
        // SectionSixListItem2:
        //   "1-1 undervisning i praktiske og anvendelige ferdigheter for å øke produktivitet og forkorte dørstokkmila i daglig arbeid.",
        // SectionSixListItem3:
        //   "Generelle produksjonsmessige ferdigheter (hvordan AI kan øke dine tilgjengelige kompetanser).",
        SectionSixTitle: "Om oss",
        SectionSixText: `Brennstrøm leverer markedsføringstjenester for bedrifter. Vi håndterer kampanjeoppsett, innholdsproduksjon og merkevarebygging.`,
        // `Hos <span class="text-3xl">Brennstrom Consult</span> kombinerer vi praktisk <span class="text-2xl">psykologi</span>  og teknologi for å <span class="text-2xl text-[#ff0000]">skape</span> digitale <span class="text-2xl">plattformer</span> og spill. Siden 2016 har vi jobbet med å <span class="text-2xl">optimalisere</span> brukeropplevelser og grensesnitt, og implementert psykologiske modeller som endrer hvordan forbrukere <span class="text-2xl">oppfatter</span> og samhandler med merkevarer. Vår reise startet med webdesign, men vi har siden beveget oss inn i mer <span class="text-2xl">komplekse</span> områder innen <span class="text-2xl">brukeropplevelse</span> og plattformutvikling, alltid med mål om å skape teknologi som er både <span class="text-2xl">funksjonell</span> og <span class="text-2xl">meningsfull</span> for brukerne.`,
        SectionSixText2: `Tjenestene våre inkluderer annonsering, nettstedutvikling, logodesign og kampanjehåndtering. Vi jobber med målrettet markedsføring basert på analyse og testing.`,
        // `Vår <span class="text-2xl">endgame</span> ligger i å utvikle spill som både underholder og <span class="text-2xl">forbereder</span> unge voksne på livets harde <span class="text-3xl text-[#ff0000]">realiteter</span>. I hvert prosjekt, enten det er et <span class="text-2xl">elegant</span> grensesnitt eller en omfattende <span class="text-2xl">spillverden</span>, jobber vi for å tjene et <span class="text-2xl">formål</span>, for å skape en <span class="text-2xl">forbindelse</span>, for å gjøre en <span class="text-2xl">forskjell</span>. Dette er ikke bare arbeid for oss; det er et oppdrag om å gjøre den <span class="text-2xl">digitale verden</span> mer <span class="text-2xl">menneskelig</span>, mer <span class="text-2xl">virkningsfull</span>, ett prosjekt om gangen.`,
        SectionSixText3: `<span class="text-lg">Vi jobber med:</span>
        <ul>
        <li class="flex items-center gap-2 mt-2"><img loading="lazy" src="assets/social-icons/google-ads.png" class="w-8"/>Google Ads</li>
        <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/seo.png" class="w-8"/>AEO, GEO and SEO</li>
         <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/meta.png" class="w-8"/>Instagram/Facebook</li>
         <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/tiktok.png" class="w-8"/>TikTok</li>
          <li class="flex items-center gap-2 mt-1"><img loading="lazy" src="assets/social-icons/website.png" class="w-8"/>Nettsideutvikling</li>
        </ul>`,
        SectionSixText4: `Du driver bedriften din, vi håndterer markedsføringen og sikrer deg ønsket kundeflow. Enklere blir det ikke.`,
        SectionSixButton: "Ta Kontakt",
        SectionSixBackButton: "Tilbake",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
