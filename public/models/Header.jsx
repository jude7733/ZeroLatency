import { Canvas } from "@react-three/fiber";
import NavBar from "./NavBar";
import { GdscLogo } from "../../components/3D/GdscLogo";
import { Bmo } from "../../components/3D/Bmo";
import { OrbitControls } from "@react-three/drei";
import { Mouse } from "../../components/3D/Mouse";
import { Flex} from "@radix-ui/themes";
const Header = () => {
  return (
    <>
      <NavBar />
      <Canvas>
        <OrbitControls autoRotate autoRotateSpeed={8} />
        <GdscLogo />
      </Canvas>
      <Flex
        align={"center"}
        justify={"center"}
        wrap
        borderRadius={"full"}
        style={{
          backgroundColor: "var(--gray-a2)",
          border: "2px solid var(--gray-a10)",
          padding: "1rem",
          borderRadius: "var(--radius-5)",
          margin: "5rem",
          flexDirection: "row",
        }}
      >
        <Canvas>
          <OrbitControls maxZoom={2} />
          <Bmo />
        </Canvas>
        <Canvas>
          <OrbitControls maxZoom={2} autoRotate autoRotateSpeed={4} />
          <Mouse />
        </Canvas>
      </Flex>
    </>
  );
};
export default Header;
