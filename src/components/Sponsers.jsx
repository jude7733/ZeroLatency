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
    >
      <Heading m="4" color="purple">
        Title Sponser
      </Heading>
      <Flex className="sponser" justify="center" align="center" mb="9" style={{borderBottom: "1px purple solid"}}>
        <img src={arrow} alt="luminar" />
      </Flex>
      <Heading m="4" color="purple">
        Other Sponsers
      </Heading>
      <Flex className="sponser" justify="center" align="center" mb="9">
        {/* <img src={luminar} alt="luminar" /> */}
        <img src={redTeam} alt="redTeam" width="40%" />
        <img src={zoople} alt="zoople" width="40%" />
      </Flex>
    </Flex>
  );
};
export default Sponsers;
