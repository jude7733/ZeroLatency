
import ReactSound from "react-sound";
import bgm from "../assets/bgm.mp3";
export const Music = () => {
  return (
    <>
      <ReactSound url={bgm} playStatus="PLAYING" autoLoad />
    </>
  );
};
