import { Flex, Heading } from "@radix-ui/themes";
import { EventComponent } from "./EventComponent";

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
      <Heading
        size={{ initial: "4", sm: "5", md: "6", lg: "8" }}
        style={{ textDecoration: "underline" }}
        color="#F2AFEF"
      >
        Events
      </Heading>
      <Flex wrap="wrap" align="center" justify="center" gap="5">
        <EventComponent title="PS5 Battle Ground" type="PS5" />
        <EventComponent title="PC gaming" type="PC" />
        <EventComponent title="VR experience" type="VR" />
        <EventComponent title="Unity Workshop" type="Unity" />
      </Flex>
    </Flex>
  );
};
export default Events;
