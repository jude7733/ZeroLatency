import bgm from "/bgm.mp3";

export const Music = () => {
  return (
    <audio loop autoPlay>
      <source src={bgm} type="audio/mpeg" />
    </audio>
  );
};
