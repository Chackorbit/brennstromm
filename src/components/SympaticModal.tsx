import { Button } from "./ToolBar";

type Props = {
  closeModal: Function;
};

function SympaticModal({ closeModal }: Props) {
  return (
    <div className="sympatic-modal fixed text-white text-center w-full md:w-1/2 p-8 top-1/2 translate-y-[-50%] rounded-lg bg-zinc-950/[.5] backdrop-blur-lg flex justify-center flex-col items-center">
      <img
        loading="lazy"
        src="assets/cross.webp"
        className="fixed right-[10px] top-[10px] w-5 cursor-pointer"
        onClick={() => closeModal()}
      />
      <span className="text-2xl text-center">About Sympatic</span>
      <br />
      <p>
        Sympatic Gaming develops short, intense mobile horror games. We aim to
        create high-quality experiences for streamers and their viewers. Our
        first game, "Organ Hunt," is currently in development and we are are
        growing our team of developers and designers.
      </p>
      <br />
      <p>Contact us through our social media: </p>
      <br />
      <div className="social-media flex justify-center">
        <a
          href="https://www.instagram.com/sympaticgaming/profilecard/?igsh=aWtlaGMzMGdjNjAz"
          target="_blank"
          className="flex flex-col items-center"
        >
          <img loading="lazy" src="assets/insta.webp" className="w-10" />
          <span>Sympatic Gaming</span>
        </a>
        <a
          href="https://www.instagram.com/organhunt?igsh=MTNtYmxiNmhwYmp3Ng%3D%3D&utm_source=qr"
          target="_blank"
          className="flex flex-col items-center ml-10"
        >
          <img loading="lazy" src="assets/insta.webp" className="w-10" />
          <span>Organ Hunt</span>
        </a>
      </div>
      <br />

      <p className="flex flex-col items-center">
        For investor information please check out our whitepaper{" "}
        <a
          className="text-white center mt-3"
          href="assets/sympatic-gaming-whitepaper-3.md"
          target="_blank"
        >
          <Button className="py-2">Whitepaper</Button>
        </a>
      </p>
    </div>
  );
}

export default SympaticModal;
