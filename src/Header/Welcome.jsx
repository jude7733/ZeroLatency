import { Button, Flex, Heading } from "@radix-ui/themes";
import banner from "../assets/hero-banner.png";
import bannerBg from "../assets/banner-bg.png";
import { ButtonAnimation } from "../components/CustomAnimation";

const Welcome = () => {
  return (
    <Flex
      mt="9"
      align="center"
      justify="center"
      direction="column"
      gap="5"
      style={{ textAlign: "center" }}
    >
      <Heading
        color="purple"
        size={{
          initial: "3",
          sm: "4",
          md: "5",
          xl: "7",
        }}
      >
        Experience the gaming
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
      <ButtonAnimation>
        <a href="https://forms.gle/4hJcWo5N8dcaTPgX9">
          <Button
            size={{ initial: "3", sm: "5", md: "6", xl: "7" }}
            variant="surface"
          >
            Register Now
          </Button>
        </a>
      </ButtonAnimation>
      <Flex
        align="center"
        justify="center"
        width="100%"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderBottom: "3px solid purple",
          borderRadius: "10%",
        }}
      >
        <img src={banner} alt="banner" width="90%" />
      </Flex>
      <Heading
        size={{
          initial: "6",
          sm: "7",
          md: "8",
          xl: "9",
        }}
      >
        Experience Gaming Through
        <br /> Latest <span style={{ color: "purple" }}>Technologies</span>
      </Heading>
      <p>
        Our success thrives on a dedicated, talented team to experience gaming.
        Join us at the event.
      </p>
    </Flex>
  );
};
export default Welcome;
