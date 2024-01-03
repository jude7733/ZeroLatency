import { Canvas } from "@react-three/fiber";
import "./App.css";
import { BoxSample } from "../components/BoxSample";
import { Flag } from "../components/Flag";
import { Sphere } from "../components/Sphere";
import { Torus } from "../components/Torus";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.7} />
        <BoxSample position={[1, 0, 0]} size={[1, 1, 1]} color="red" />
        <Sphere position={[-1, 0, -0]} />
      </Canvas>
      <Canvas>
        <ambientLight />
        <Flag position={[0, 0, 0]} />
      </Canvas>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 3]} intensity={4} />
        <Torus position={[0, 0, 0]} />
      </Canvas>
    </>
  );
}

export default App;
