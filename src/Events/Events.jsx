import { Flex, Heading } from "@radix-ui/themes";
import { EventComponent } from "./EventComponent";

const Events = () => {
  return (
    <Flex
      justify="center"
      align="center"
      wrap="wrap"
      gap="3"
      direction="column"
      p="4"
      mt="5"
      mb="6"
      id="events"
    >
      <Heading
        size={{ initial: "3", sm: "4", md: "5", lg: "8" }}
        style={{ textDecoration: "underline" }}
        color="#F2AFEF"
      >
        Events
      </Heading>
      <EventComponent title="PS5 Battle Ground" type="PS5" />
      <EventComponent title="PC gaming" type="PC" />
      <EventComponent title="VR experience" type="VR" />
      <EventComponent title="Unity Workshop" type="Unity" />
    </Flex>
  );
};
export default Events;
