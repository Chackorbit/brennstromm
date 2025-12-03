import { Dispatch, useEffect } from "react";
import { Button } from "./ToolBar";
// import { Modal } from "antd";
// import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";
// import DustEffect from './DustParticles'
import gsap from "gsap";
import { useAudio } from "react-use-audio";
// import SympaticModal from './SympaticModal'

type Props = {
  setIsPortfolio: Dispatch<boolean>;
  setIsScrollDisabled: Dispatch<boolean>;
  animating: boolean;
  setBackFromGaming: Dispatch<boolean>;
};

// const cardsData = [
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/abe.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/startgate.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/tunayapi.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/smart-cabins.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/bodoror.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/global-care-development.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/global-care-development.png",
//     url: "",
//   },
//   {
//     title: {
//       en: "Organ Hunt",
//       no: "Organ Hunt",
//     },
//     img: "/card/global-care-development.png",
//     url: "https://organhunt.com/",
//   },
//   {
//     title: {
//       en: "",
//       no: "",
//     },
//     img: "/card/global-care-development.png",
//     url: "",
//   },
// ];

function BrainstormGaming({
  setIsPortfolio,
  setIsScrollDisabled,
  animating,
  setBackFromGaming,
}: Props) {
  const { play, stop } = useAudio("/assets/audio 2.mp3");

  // const three = useThree();
  const { t } = useTranslation();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen((prev) => !prev);

  const backHorizontalChangeHandler = () => {
    var canvas: any = document.querySelector("canvas");
    var bg = document.querySelector("#bg");
    var video: any = document.querySelector("#animationVideo");

    gsap.to(canvas, {
      fiter: "brightness(1)",
      webkitFilter: "brightness(1)",
      duration: 1,
    });
    gsap.to(bg, {
      fiter: "brightness(1)",
      webkitFilter: "brightness(1)",
      duration: 1,
    });
    setTimeout(() => {
      gsap.to(video, { opacity: 1, duration: 1 });
    }, 1000);

    setIsPortfolio(false);
    setIsScrollDisabled(false);

    setBackFromGaming(true);

    stop();

    setTimeout(() => {
      setBackFromGaming(false);
    }, 400);
  };

  useEffect(() => {
    if (!animating) {
      play();
    }
  }, [animating]);

  // const openModal =()=>{
  //   setIsModalOpen(true)
  // }

  // const closeModal =()=>{
  //   setIsModalOpen(false)
  // }

  return (
    <section
      className="w-screen h-full md:h-screen object-cover overflow-scroll md:overflow-hidden"
      style={{ backgroundImage: "url(assets/gaming_bg.webp)" }}
    >
      <div className="p-6 md:p-12 gap-5 md:gap-9 flex items-center flex-col h-screen brain-container">
        <div className="place-self-start">
          {!animating && (
            <Button className="py-2" onClick={backHorizontalChangeHandler}>
              {t("SectionSixBackButton")}
            </Button>
          )}
        </div>

        {/* <div className="cards">
          {cardsData.map((card,i) => (
            <Fragment key={i}>
              <PortfolioCard card={card} index={i+1} animating={animating} openModal={openModal}/>
            </Fragment>
          ))}

        </div> */}

        {window.innerWidth < 576 ? (
          <video
            src="assets/output.mp4"
            preload="auto"
            className="fixed top-0 left-0 pointer-events-none object-contain bg-white"
            id="animationVideo"
            playsInline
          ></video>
        ) : (
          <video
            src="assets/output2.mp4"
            preload="auto"
            className="fixed top-0 left-0 pointer-events-none object-fill bg-white"
            id="animationVideo"
            playsInline
          ></video>
        )}
        {/* <DustEffect/>
        {isModalOpen && <SympaticModal closeModal={closeModal}/>} */}
      </div>
    </section>
  );
}

export default BrainstormGaming;

// type CardProps = {
//   card: {
//     title: { en: string; no: string };
//     img: string;
//     url: string;
//   };
//   index:number,
//   animating:boolean,
//   openModal:Function
// };

// function PortfolioCard({ card, index, animating,openModal }: CardProps) {
//   const { play } = useAudio("/assets/Move over tile.wav");
//   const { play:errorPlay } = useAudio("/assets/Error Select.mp3");
//   const timerRef = useRef(0);

//   const handleMouseEnter = () => {
//     timerRef.current = setTimeout(() => {
//       if(!animating){
//       play()
//       }
//     }, 100);
//   };

//   const handleMouseLeave = () => {
//     clearTimeout(timerRef.current);
//   };

//   const handleClick = (index:number,card:any) =>{
//     if(!animating){
//     if(index==8){
//       window.open(card.url,'_blank');
//     }
//     else if(index==5){
//       openModal()
//     }
//     else{
//       errorPlay()
//     }
//   }
//   }

//   return (
//     <a
//       style={{backgroundImage:`url(assets/grid/compressed-images/${index}.png`}}
//       className={`grid-card ${index==8 ? "bg-cover bg-bottom" : "bg-cover"}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={()=>handleClick(index,card)}
//     >

// {index==5 && <img loading="lazy" src="assets/SympaticLogo1.png" className="invert w-5/6"/>}

//     </a>
//   );
// }
