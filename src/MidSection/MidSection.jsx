import Intro from "/vid/zero_latency.mp4";
import "./Video.css";
import Events from "../Events/Events";
import { Flex } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import gdsc from "../assets/gdsclogo.png";
import xfinity from "../assets/xfinity-logo.png";
import { CustomAnimation, LogoAnimation } from "../components/CustomAnimation";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

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
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <img
                src={gdsc}
                alt="gdsc logo"
                style={{ maxWidth: "150px" }}
                className="ImageTrigger"
              />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 7 }}
                >
                  <img width="100px" src={gdsc} alt="GDSC" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 15,
                    }}
                  >
                    <div></div>
                    <div className="Text">
                      Google Developer Student Clubs <br /> Bharata Mata College
                    </div>
                  </div>
                  <a href="https://www.instagram.com/gdsc.bmc?igsh=eWkxeGl4b2Q5bWZo">
                    <InstagramLogoIcon color="#4285F4" />
                  </a>
                </div>
                <HoverCard.Arrow className="HoverCardArrow" />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </LogoAnimation>

        <LogoAnimation mode="right">
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <img
                src={xfinity}
                alt="xfinity logo"
                style={{ maxWidth: "150px" }}
                className="ImageTrigger"
              />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                  }}
                >
                  <img width="100px" src={xfinity} alt="xfinity" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 15,
                    }}
                  >
                    <div className="Text">
                      Xfinity gaming club
                      <br /> Bharatha Mata College
                    </div>
                    <a href="https://www.instagram.com/xfinity.bmc?igsh=dTE5dmxxNnU1cmFj">
                      <InstagramLogoIcon color="#599DFF" />
                    </a>
                  </div>
                </div>
                <HoverCard.Arrow className="HoverCardArrow" />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
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
