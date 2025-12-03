import { useEffect } from "react";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

import { Button } from "./ToolBar";

type Props = {
  play:any,
  stop:any,
  changeMuted:any,
  isMuted:any
};

function MusicButton({play,stop,changeMuted,isMuted}:Props) {
  



  useEffect(() => {
    if (isMuted) {
      play();
    } else {
      stop();
    }
  }, [isMuted]);

  return (
    <Button
      onClick={() => {
        changeMuted(!isMuted);
      }}
      className="button hidden md:block"
    >
      {isMuted ? <BsFillVolumeDownFill /> : <BsFillVolumeMuteFill />}
    </Button>
  );
}

export default MusicButton;
