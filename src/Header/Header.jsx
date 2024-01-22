import { Canvas } from "@react-three/fiber";
import NavBar from "./NavBar";
import { Flex } from "@radix-ui/themes";
import { Gdsc } from "../components/3D/Gdsc";
import Welcome from "./Welcome";
const Header = () => {
  return (
    <>
      <NavBar />
      <Welcome />
      <Flex style={{ height: "60vh" }}>
        <Canvas camera={{ fov: 140 }}>
          <ambientLight intensity={0.5} />
          <Gdsc />
        </Canvas>
      </Flex>
    </>
  );
};
export default Header;
