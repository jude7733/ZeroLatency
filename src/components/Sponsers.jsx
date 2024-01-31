import { Flex, Heading } from "@radix-ui/themes";
import arrow from "../assets/arrow-wing.png";
import luminar from "../assets/luminar.png";
import redTeam from "../assets/red-team.png";
import zoople from "../assets/zoople.png";
const Sponsers = () => {
  return (
    <Flex
      className="sponsers"
      justify="center"
      align="center"
      direction="column"
      id="sponsers"
    >
      <Heading m="4" color="purple">
        Title Sponser
      </Heading>
      <Flex
        className="sponser"
        justify="center"
        align="center"
        pb="9"
        style={{
          borderBottom: "2px purple groove",
          width: "90%",
          borderRadius: "10%",
        }}
        mb="4"
      >
        <img src={arrow} alt="Arrow Wings" />
      </Flex>
      <Heading
        m="4"
        color="purple"
        size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      >
        Co-Sponsers
      </Heading>
      <Flex className="sponser" justify="center" align="center" mb="9">
        {/* <img src={luminar} alt="luminar" /> */}
        <img src={redTeam} alt="redTeam" width="45%" />
      </Flex>
      <Heading
        m="4"
        color="purple"
        size={{ initial: "1", sm: "2", md: "3", lg: "4" }}
      >
        Other Sponsers
      </Heading>
      <Flex className="sponser" justify="center" align="center" mb="9">
        <img src={zoople} alt="zoople" />
      </Flex>
    </Flex>
  );
};
export default Sponsers;
