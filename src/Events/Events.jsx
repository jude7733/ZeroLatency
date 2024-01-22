import { Flex } from "@radix-ui/themes";
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
    >
      <EventComponent title="PS5 Battle Ground" type="PS5" />
      <EventComponent title="PC gaming" type="PC" />
      <EventComponent title="VR experience" type="VR" />
    </Flex>
  );
};
export default Events;
