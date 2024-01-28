import { CustomAnimation} from "../components/CustomAnimation";
import Intro from "/vid/zero_latency.mp4";
import "./Video.css"

const MidSection = () => {
  return (
    <div className="video">
      <CustomAnimation mode="reveal">
        <video autoPlay={true} loop width="100%" muted style={{maxWidth: "720px"}}>
          <source src={Intro} type="video/mp4" />
        </video>
      </CustomAnimation>
    </div>
  );
};
export default MidSection;
