// import gsap, { Power1 } from "gsap";
// import { MutableRefObject } from "react";

// type Params = {
//   three: any;
//   stopAudio: () => void;
//   changeMuted: (value: boolean) => void;
//   setAnimating: (value: boolean) => void;
//   setShowPortfolio: (value: boolean) => void;
//   setIsScrollDisabled: (value: boolean) => void;
// };

// export function useAtricalesChangeHandler({
//   three,
//   stopAudio,
//   changeMuted,
//   setAnimating,
//   setShowPortfolio,
//   setIsScrollDisabled,
// }: Params) {
//   const handler = () => {
//     stopAudio();
//     changeMuted(false);

//     const Hill = three.scene.getObjectByName("hill");
//     const Flag = three.scene.getObjectByName("flag");

//     const canvas = document.querySelector<HTMLCanvasElement>("canvas");
//     const bg = document.querySelector<HTMLElement>("#bg");
//     const video = document.querySelector<HTMLVideoElement>("#animationVideo");

//     setAnimating(true);

//     if (Hill && Flag) {
//       gsap.to(Hill.position, {
//         z: Hill.position.z + 1.5,
//         x: Hill.position.x - 0.5,
//         y:
//           window.innerWidth > 600
//             ? Hill.position.y - 0.5
//             : Hill.position.y - 0.15,
//         duration: 1,
//       });
//       gsap.to(Flag.position, {
//         z: Flag.position.z + 1.5,
//         x: Flag.position.x - 0.5,
//         y:
//           window.innerWidth > 600
//             ? Flag.position.y - 0.5
//             : Flag.position.y - 0.15,
//         duration: 1,
//       });

//       setTimeout(() => {
//         gsap.to(canvas, {
//           webkitFilter: "brightness(3)",
//           duration: 1.5,
//           ease: Power1.easeIn,
//         });
//         gsap.to(bg, {
//           webkitFilter: "brightness(3)",
//           duration: 1.5,
//           ease: Power1.easeIn,
//           onComplete: () => {
//             if (video) {
//               video.play();
//               video.onended = () => {
//                 setAnimating(false);
//                 setIsScrollDisabled(false);
//                 window.location.href = "https://globalcaredevelopment.com/";
//               };
//             }
//           },
//         });
//         setTimeout(() => {
//           setShowPortfolio(true);
//         }, 1000);
//       }, 500);

//       setIsScrollDisabled(true);
//     }
//   };

//   return handler;
// }
