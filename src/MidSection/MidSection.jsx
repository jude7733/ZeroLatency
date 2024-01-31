import Intro from "/vid/zero_latency.mp4";
import "./Video.css";
import Events from "../Events/Events";
import { Flex, Heading } from "@radix-ui/themes";
import gdsc from "../assets/gdsclogo.png";
import xfinity from "../assets/xfinity-logo.png";
import { LogoAnimation } from "../components/CustomAnimation";

const MidSection = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        gap="7"
        style={{ marginTop: "4rem" }}
      >
        <LogoAnimation mode="left">
          <img
            src={gdsc}
            alt="gdsc logo"
            style={{ width: "auto", maxWidth: "200px" }}
          />
        </LogoAnimation>
        <LogoAnimation mode="right">
          <img
            src={xfinity}
            alt="xfinity logo"
            style={{ width: "auto", maxWidth: "200px" }}
          />
        </LogoAnimation>
      </Flex>
      <Heading
        size={{ initial: "6", sm: "6", md: "7", lg: "8" }}
        style={{
          textDecoration: "underline",
          textAlign: "center",
          marginTop: "4rem",
        }}
        color="#F2AFEF"
      >
        Events
      </Heading>
      <div style={{ position: "relative", width: "100%" }}>
        <video className="video" autoPlay={true} loop muted>
          <source src={Intro} type="video/mp4" />
        </video>
        <div className="overlay">
          <Events />
        </div>
      </div>
    </>
  );
};
export default MidSection;
