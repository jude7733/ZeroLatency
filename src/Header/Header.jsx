import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NavBar from "./NavBar";
import { GdscLogo } from "../../components/GdscLogo";
const Header = () => {
    return (
        <>
        <NavBar />
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={2} />
            <pointLight intensity={7} position={[0, 1, 2]} />
            <GdscLogo />
        </Canvas>
        </>
    );
}
export default Header;
    