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
        Title Sponsor
      </Heading>
      <Flex
        className="sponser"
        justify="center"
        align="center"
        pb="9"
        style={{
          borderBottom: "3px purple groove",
          width: "80%",
          borderRadius: "5%",
        }}
        mb="4"
      >
        <img src={arrow} alt="Arrow Wings" />
      </Flex>
      <Heading
        m="4"
        color="purple"
        size={{ initial: "3", sm: "4", md: "5", lg: "6" }}
      >
        Co-Sponsors
      </Heading>
      <Flex
        className="sponser"
        justify="center"
        align="center"
        mb="9"
        style={{
          borderBottom: "2px purple groove",
          width: "70%",
          borderRadius: "5%",
          maxWidth: "600px",
        }}
      >
        <img src={luminar} alt="luminar" width="35%" />
        <img src={redTeam} alt="redTeam" width="35%" />
      </Flex>
      <Heading
        m="4"
        color="purple"
        size={{ initial: "2", sm: "3", md: "4", lg: "5" }}
      >
        Other Sponsors
      </Heading>
      <Flex className="sponser" justify="center" align="center" mb="9">
        <img src={zoople} alt="zoople" />
      </Flex>
    </Flex>
  );
};
export default Sponsers;
