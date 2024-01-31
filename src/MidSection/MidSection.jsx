import Intro from "/vid/zero_latency.mp4";
import "./Video.css";
import Events from "../Events/Events";
import { Flex } from "@radix-ui/themes";
import gdsc from "../assets/gdsclogo.png";
import xfinity from "../assets/xfinity-logo.png";
import { CustomAnimation, LogoAnimation } from "../components/CustomAnimation";

const MidSection = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        gap="3"
        style={{ marginTop: "4rem" }}
      >
        <LogoAnimation mode="left">
          <img
            src={gdsc}
            alt="gdsc logo"
            style={{ maxWidth: "150px" }}
            width="auto"
          />
        </LogoAnimation>
        <LogoAnimation mode="right">
          <img
            src={xfinity}
            alt="xfinity logo"
            style={{ maxWidth: "150px" }}
            width="auto"
          />
        </LogoAnimation>
      </Flex>

      <div className="videoContainer">
        <CustomAnimation mode="reveal">
          <video className="video" autoPlay={true} loop muted>
            <source src={Intro} type="video/mp4" />
          </video>
        </CustomAnimation>
      </div>
      <Events />
    </>
  );
};
export default MidSection;
