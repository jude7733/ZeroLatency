import { Button, Flex, Heading } from "@radix-ui/themes";
import unity from "../assets/Unity.jpg";
import tekken from "../assets/tekken.jpg";
import efootball from "../assets/E-football.jpeg";
import Ar from "../assets/Ar.jpg";
import "./reg.css";
import {
  ButtonAnimation,
  CustomAnimation,
} from "../components/CustomAnimation";
import { PlayIcon } from "@radix-ui/react-icons";

const Games = ({ type, desc }) => {
  const bg =
    type === "Unity"
      ? unity
      : type === "Tekken"
      ? tekken
      : type === "E-football"
      ? efootball
      : Ar;

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

          <Flex justify="end" width="100%">
            <ButtonAnimation>
              {type === "Unity" ? (
                <a href="https://forms.gle/VFUnbksa7iaKy9fi9">
                  <Button variant="outline">
                    Register
                    <PlayIcon />
                  </Button>
                </a>
              ) : type === "Tekken" ? (
                <a href="https://docs.google.com/forms/d/1fPICnf7TlkPvOycZ0MnHAM5oMxXTypGt5_BWhUZ_j14/edit">
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
    >
      <Heading>Tournament Registration</Heading>
      <Games
        type="Unity"
        desc="Explore creativity and innovation! 🚀 Register now for the
              ultimate Game Development experience and unleash your creativity🎮"
      />
      <Games
        type="Tekken"
        desc="Get ready to fight your way to the top in the electrifying
              Tekken Tournament!🔥"
      />
      <Games
        type="E-football"
        desc=" Kick off your digital soccer journey in the thrilling world of
               E-football!⚽🎮"
      />
      <Games
        type="Ar treasure hunt"
        desc=" Discover treasures all around you! Explore, search, and win
              exciting rewards in this augmented reality adventure!
              🌟 "
      />
    </Flex>
  );
};
export default Reg;
