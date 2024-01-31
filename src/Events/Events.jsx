import { Flex, Heading } from "@radix-ui/themes";
import { EventComponent } from "./EventComponent";
import { CustomAnimation } from "../components/CustomAnimation";

const Events = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      mt="5"
      mb="6"
      id="events"
      p="1"
      gap="6"
    >
      <Flex wrap="wrap" align="center" justify="center" gap="5" width="100%">
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
