import { ButtonAnimation, TextAnimation } from "../components/CustomAnimation";
import NavBar from "./NavBar";
import banner from "../assets/hero-banner.png";
import { Button, Flex, Heading } from "@radix-ui/themes";

const Header = () => {
  return (
    <>
      <NavBar />
      <Flex
        mt="9"
        align="center"
        justify="center"
        direction="column"
        gap="6"
        style={{ textAlign: "center" }}
      >
        <TextAnimation>
          <Heading
            color="purple"
            size={{
              initial: "3",
              sm: "4",
              md: "5",
              xl: "7",
            }}
            style={{ padding: "10px" }}
          >
            Experience the AR and VR
          </Heading>
          <Heading
            size={{
              initial: "8",
              sm: "9",
              md: "9",
              xl: "9",
            }}
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
          >
            Dive into the world of
            <br /> Gaming Odyssey!
          </Heading>
        </TextAnimation>
        <ButtonAnimation>
          <a href="https://forms.gle/4hJcWo5N8dcaTPgX9">
            <Button
              size={{ initial: "4", sm: "7", md: "8", xl: "9" }}
              variant="surface"
            >
              Register Now
            </Button>
          </a>
        </ButtonAnimation>
        <Flex
          align="center"
          justify="center"
          style={{
            borderBottom: "10px solid purple",
            borderRadius: "10%",
            width: "97%",
          }}
        >
          <img src={banner} alt="banner" width="100%" />
        </Flex>
        <TextAnimation>
          <Heading
            size={{
              initial: "6",
              sm: "7",
              md: "8",
              xl: "9",
            }}
            style={{ marginTop: "2rem" }}
          >
            Experience Gaming Through
            <br /> Latest <span style={{ color: "#5D3FD3" }}>Technologies</span>
          </Heading>
          <p style={{padding: "10px"}}>
            Our success thrives on a dedicated, talented team to experience
            gaming. Join us at the event.
          </p>
        </TextAnimation>
      </Flex>
    </>
  );
};
export default Header;
