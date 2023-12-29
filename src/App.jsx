import { Canvas } from "@react-three/fiber";
import "./App.css";
import { BoxSample } from "../components/BoxSample";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <group position={[-0, 0, 0]}>
        <BoxSample position={[1, 0, 0]} size={[1, 1, 1]} color="red" />
        <BoxSample position={[-1, 0, 0]} size={[1, 1, 1]} color="blue" />
        <BoxSample position={[0, 1, 0]} size={[1, 1, 1]} color="green" />
        <BoxSample position={[0, -1, 0]} size={[1, 1, 1]} color="yellow" />
      </group>
    </Canvas>
  );
}

export default App;
