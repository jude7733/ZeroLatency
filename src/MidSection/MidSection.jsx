import { VideoAnimation } from "../components/CustomAnimation";
import Intro from "/vid/zero_latency.mp4";

const MidSection = () => {
  return (
    <VideoAnimation>
      <video autoPlay={true} loop width="100%" muted>
        <source src={Intro} type="video/mp4" />
      </video>
    </VideoAnimation>
  );
};
export default MidSection;
