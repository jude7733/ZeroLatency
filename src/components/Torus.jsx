import { MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Torus = ({ position }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.02;
    ref.current.rotation.x += 0.01; 
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[1.5, 0.1, 1000, 50]} />
      <MeshWobbleMaterial factor={6} speed={1} color="purple" />
    </mesh>
  );
};
