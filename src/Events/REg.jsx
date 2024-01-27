import { Button, Flex, Heading } from "@radix-ui/themes";
import tekken from "../assets/tekken.jpg";
import efootball from "../assets/E-football.jpg";
import Ar from "../assets/Ar.jpeg";
import "./reg.css";

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
        maxWidth: "550px",
        height: "320px",
        borderRadius: "5%",
      }}
      className="card"
    >
      <Flex
        direction="column"
        align="start"
        p="2"
        style={{
          backgroundColor: "rgb(0 0 0 / 70%)",
          width: "100%",
          height: "100%",
          borderRadius: "10%",
          justifyContent: "space-evenly",
        }}
      >
        <Heading color="purple">{type}</Heading>
        <p className="desc">Register now for amazing gaming experience</p>
        <Flex justify="end" width="100%">
          <Button variant="outline">Register</Button>
        </Flex>
      </Flex>
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
      mt="7"
      mb="7"
      direction="column"
      gap="5"
    >
      <Heading>Tournaments</Heading>
      <Games type="Tekken" />
      <Games type="E-football" />
      <Games type="Ar treasure hunt" />
    </Flex>
  );
};
export default Reg;
