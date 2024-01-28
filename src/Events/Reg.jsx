import { Button, Flex, Heading } from "@radix-ui/themes";
import tekken from "../assets/tekken.jpg";
import efootball from "../assets/E-football.jpg";
import Ar from "../assets/Ar.jpeg";
import "./reg.css";
import { ButtonAnimation, CustomAnimation } from "../components/CustomAnimation";
import { PlayIcon } from "@radix-ui/react-icons";

const Games = ({ type }) => {
  const bg =
    type === "Tekken" ? tekken : type === "E-football" ? efootball : Ar;
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
          <p className="desc">Register now for amazing gaming experience</p>
          <Flex justify="end" width="100%">
            <ButtonAnimation>
              <Button variant="outline">Play<PlayIcon /></Button>
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
      <Heading>Tournaments</Heading>
      <Games type="Tekken" />
      <Games type="E-football" />
      <Games type="Ar treasure hunt" />
    </Flex>
  );
};
export default Reg;
