import { Button, Flex, Heading } from "@radix-ui/themes";
import banner from "../assets/hero-banner.png";
import bannerBg from "../assets/banner-bg.png";
const Welcome = () => {
  return (
    <Flex
      mt="9"
      align="center"
      justify="center"
      direction="column"
      gap="7"
      style={{ textAlign: "center" }}
    >
      <Heading
        color="purple"
        size={{
          initial: "3",
          sm: "4",
          md: "5",
          xl: "6",
        }}
      >
        Experience the gaming
      </Heading>
      <Heading
        size={{
          initial: "6",
          sm: "7",
          md: "8",
          xl: "9",
        }}
      >
        Dive into the world of
        <br /> Gaming Odyssey!
      </Heading>
      <Button style={{ fontWeight: "bold" }}>Register</Button>
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
    </Flex>
  );
};
export default Welcome;
