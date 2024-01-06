import { Canvas } from "@react-three/fiber";
import NavBar from "./NavBar";
import { GdscLogo } from "../../components/GdscLogo";
import { Bmo } from "../../components/Bmo";
import { OrbitControls } from "@react-three/drei";
const Header = () => {
    return (
        <>
        <NavBar />
        <Canvas>
            <ambientLight intensity={2} />
                <pointLight intensity={7} position={[0.5, 1, 2]} />
                <pointLight intensity={7} position={[-0.5, 1, -2]} />
                <GdscLogo />
            </Canvas>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={2} />
                <pointLight intensity={7} position={[0.5, 1, 2]} />
                <Bmo /> 
            </Canvas>

        </>
    );
}
export default Header;
    