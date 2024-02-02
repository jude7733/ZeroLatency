import { Button, Flex, Heading } from "@radix-ui/themes";
import unity from "../assets/Unity.jpg";
import efootball from "../assets/E-football.jpeg";
import "./reg.css";
import {
  ButtonAnimation,
  CustomAnimation,
} from "../components/CustomAnimation";
import { PlayIcon } from "@radix-ui/react-icons";

const Games = ({ type, desc, date = "7 Feb" }) => {
  const bg = type === "Unity" ? unity : efootball;

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "95%",
        maxWidth: "600px",
        height: "320px",
        borderRadius: "2%",
        boxShadow: "2px 5px 5px rgba(255,192,203,0.5)",
      }}
      className="card"
    >
      <CustomAnimation mode="reveal">
        <Flex
          direction="column"
          align="start"
          p="5"
          gap="7"
          style={{
            backgroundColor: "rgb(0 0 0 / 80%)",
            width: "100%",
            height: "100%",
            borderRadius: "8%",
            justifyContent: "space-evenly",
          }}
        >
          <Heading color="purple">{type}</Heading>

          <p className="desc">{desc}</p>

          <Flex justify="between" width="100%">
            <Heading size="4" color="pink">
              {date}
            </Heading>
            <ButtonAnimation>
              {type === "Unity" ? (
                <a href="https://forms.gle/Hzr9jz2zG2UybGky5">
                  <Button variant="outline">
                    Register
                    <PlayIcon />
                  </Button>
                </a>
              ) : type === "E-football" ? (
                <a href="https://docs.google.com/forms/d/17jEQy3OrPqqfwWg6klwZaO2VDhEUgXWDr9-krRMgsaw/edit">
                  <Button variant="outline">
                    Register
                    <PlayIcon />
                  </Button>
                </a>
              ) : (
                <a href="https://docs.google.com/forms/d/1X3dMlzXO9fPCvS2AhxuDCGE7VWsT2or5HzTrbXSyEjM/edit">
                  <Button variant="outline">
                    Register
                    <PlayIcon />
                  </Button>
                </a>
              )}
            </ButtonAnimation>
          </Flex>
        </Flex>
      </CustomAnimation>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </Flex>
  );
};

const Reg = () => {
  return (
    <Flex
      align="center"
      justify="center"
      wrap="wrap"
      mt="9"
      mb="9"
      direction="column"
      gap="8"
      width="100%"
      style={{
        borderBottom: "2px groove pink",
        padding: "2rem 0",
        borderRadius: "2rem",
        borderTop: "2px groove pink",
        maxWidth: "1200px",
        backgroundColor: "rgb(0 0 0 / 20%)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Heading color="#9867C5">Register Now</Heading>
      <Games
        type="Unity"
        desc="Explore creativity and innovation! 🚀 Register now for the
              ultimate Game Development experience and unleash your creativity🎮"
        date="6 Feb"
      />
      <Heading color="#9867C5">Tournaments</Heading>
      <Games
        type="E-football"
        desc=" Kick off your digital soccer journey in the thrilling world of
               E-football!⚽🎮"
      />
    </Flex>
  );
};
export default Reg;
