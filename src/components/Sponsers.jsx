import { Flex, Heading } from "@radix-ui/themes";
import arrow from "../assets/arrow-wing.png";
import luminar from "../assets/luminar.png";
import redTeam from "../assets/red-team.png";
import zoople from "../assets/zoople.png";
import gameShack from "../assets/gameShack.png";
import immied from "../assets/Immied-Logo.png";
import siUK from "../assets/SI-UK-Logo.png";
import t4Logo from "../assets/T4Logo.png";
import terabotsLogo from "../assets/terabots-logo.png";
import { TextAnimation } from "./CustomAnimation";

const Sponsers = () => {
  return (
    <Flex justify="center" align="center" direction="column" id="sponsers">
      <TextAnimation>
        <Heading m="4" color="purple">
          Title Sponsor
        </Heading>
      </TextAnimation>
      <Flex
        justify="center"
        align="center"
        pb="9"
        style={{
          borderBottom: "3px purple groove",
          width: "90%",
          borderRadius: "5%",
        }}
        mb="4"
      >
        <img
          src={arrow}
          alt="Arrow Wings"
          width="40%"
          style={{
            maxWidth: "300px",
          }}
        />
      </Flex>
      <TextAnimation>
        <Heading
          m="4"
          color="purple"
          size={{ initial: "3", sm: "4", md: "5", lg: "6" }}
        >
          Co-Sponsors
        </Heading>
      </TextAnimation>
      <Flex
        justify="center"
        align="center"
        mb="9"
        wrap="wrap"
        gap="6"
        p="5"
        style={{
          borderBottom: "2px purple groove",
          width: "80%",
          borderRadius: "5%",
          maxWidth: "1200px",
        }}
      >
        <img
          src={immied}
          alt="Immied"
          width="40%"
          style={{ maxWidth: "250px" }}
        />
        <img
          src={redTeam}
          alt="redTeam"
          width="40%"
          style={{ maxWidth: "250px" }}
        />
        <img
          src={luminar}
          alt="luminar"
          width="40%"
          style={{ maxWidth: "250px" }}
        />
        <img src={siUK} alt="SIUK" width="40%" style={{ maxWidth: "250px" }} />
      </Flex>
      <TextAnimation>
        <Heading
          m="4"
          color="purple"
          size={{ initial: "2", sm: "3", md: "4", lg: "5" }}
        >
          Other Sponsors
        </Heading>
      </TextAnimation>
      <Flex
        justify="center"
        align="center"
        mb="9"
        gap="6"
        wrap="wrap"
        style={{
          width: "70%",
        }}
      >
        <img
          src={zoople}
          alt="zoople"
          width="40%"
          style={{ maxWidth: "200px" }}
        />
        <img
          src={gameShack}
          alt="gameShack"
          width="40%"
          style={{ maxWidth: "200px" }}
        />
        <img
          src={t4Logo}
          alt="t4Logo"
          width="40%"
          style={{ maxWidth: "200px" }}
        />
        <img
          src={terabotsLogo}
          alt="Terabot sLogo"
          width="40%"
          style={{ maxWidth: "200px" }}
        />
      </Flex>
    </Flex>
  );
};
export default Sponsers;
