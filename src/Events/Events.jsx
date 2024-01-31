import { Flex, Heading } from "@radix-ui/themes";
import { EventComponent } from "./EventComponent";
import { CustomAnimation } from "../components/CustomAnimation";

const Events = () => {
  return (
    <Flex
      justify="center"
      align="center"
      mt="5"
      mb="6"
      id="events"
      p="1"
      gap="6"
      width="100%"
      style={{
        borderBottom: "3px solid purple",
        padding: "2rem 0",
        borderRadius: "2rem",
        borderTop: "2px groove purple",
        maxWidth: "1200px",
      }}
    >
      <Flex wrap="wrap" align="center" justify="center" gap="5">
        <div style={{ width: "100%" }}>
          <Heading
            size={{ initial: "6", sm: "6", md: "7", lg: "8" }}
            style={{
              textAlign: "center",
            }}
            color="#F2AFEF"
          >
            Events
          </Heading>
        </div>
        <CustomAnimation mode="slideInTop">
          <EventComponent title="PS5 Battle Ground" type="PS5" />
        </CustomAnimation>
        <CustomAnimation mode="slideInTop" index={2}>
          <EventComponent title="PC gaming" type="PC" />
        </CustomAnimation>
        <CustomAnimation mode="slideInTop" index={3}>
          <EventComponent title="VR experience" type="VR" />
        </CustomAnimation>
        <CustomAnimation mode="slideInTop" index={4}>
          <EventComponent title="Unity Workshop" type="Unity" />
        </CustomAnimation>
      </Flex>
    </Flex>
  );
};
export default Events;
