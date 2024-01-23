import ReactSound from "react-sound";
import bgm from "/bgm.mp3";

export const Music = () => {
  return (
    <>
      <ReactSound url={bgm} playStatus="PLAYING" autoLoad  />
    </>
  );
};
