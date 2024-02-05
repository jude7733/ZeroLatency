import { Flex, Heading } from "@radix-ui/themes";
import { Canvas } from "@react-three/fiber";
import { Torus3D } from "./3D/Torus3D";
import { OrbitControls } from "@react-three/drei";

const Explore = () => {
  return (
    <Flex
      wrap="wrap"
      p={{ initial: "5", md: "7", lg: "9" }}
      align="center"
      justify="center"
      mb="9"
      style={{
        maxWidth: "96%",
        backgroundColor: "rgb(0 0 0 / 40%)",
        borderRadius: "5%",
        borderBottomRightRadius: "15%",
        borderTopLeftRadius: "15%",
        borderTop: "hsla(267, 100%, 63%, 0.3) 3px ridge",
        borderBottom: "hsla(267, 100%, 63%, 0.3) 3px ridge",
      }}
    >
      <div style={{ height: "30vh", flex: 1 }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, -10]} intensity={3} />
          <OrbitControls />
          <Torus3D />
        </Canvas>
      </div>
      <div style={{ flex: 3, maxWidth: "600px" }}>
        <Heading
          color="#5D3FD3"
          size={{ initial: "5", md: "6", lg: "7" }}
          mb={{ initial: "3", md: "4", lg: "5" }}
        >
          Explore the world of Virtual Reality
        </Heading>
        <Heading size={{ initial: "3", md: "4", lg: "4" }}>
          Dive into a world beyond screens. 🌟 Gather your gaming squad, grab
          the devices, and get ready to engage in epic battles in the virtual
          battlegrounds like never before! 🎮🔥 Join us at the ‘Zero Latency’
          gaming event where we’ll elevate your gaming skills to new heights.
          Don’t miss the excitement!🚀
        </Heading>
      </div>
    </Flex>
  );
};
export default Explore;
