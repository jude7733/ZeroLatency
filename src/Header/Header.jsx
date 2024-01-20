import { Canvas } from "@react-three/fiber";
import NavBar from "./NavBar";
import { Box, Flex } from "@radix-ui/themes";
import { Gdsc } from "../components/3D/Gdsc";
const Header = () => {
  return (
    <>
      <NavBar />
      <Flex style={{height: "60vh"}}>
        <Canvas camera={{ fov: 140 }}>
          <ambientLight intensity={0.5} />
          <Gdsc />
        </Canvas>
      </Flex>
      {/* <Flex
        align={"center"}
        justify={"center"}
        wrap
        style={{
          padding: "1rem",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Box
          style={{
            minWidth: "400px",
            flex: 1,
            margin: "1rem",
            backgroundColor: "var(--gray-a2)",
            border: "2px solid var(--gray-a10)",
            borderRadius: "var(--radius-5)",
          }}
        >
          <Canvas>
            <OrbitControls maxZoom={2} autoRotate autoRotateSpeed={8} />
            <Bmo />
          </Canvas>
        </Box>
        <Box
          style={{
            minWidth: "300px",
            flex: 1,
            margin: "1rem",
            backgroundColor: "var(--gray-a2)",
            border: "2px solid var(--gray-a10)",
            borderRadius: "var(--radius-5)",
          }}
        >
          <Canvas>
            <OrbitControls maxZoom={2} autoRotate autoRotateSpeed={4} />
            <Mouse />
          </Canvas>
        </Box>
      </Flex> */}
    </>
  );
};
export default Header;
