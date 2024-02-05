import { MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Torus3D = ({ position = [0, 0, 0] }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
  });
  return (
    <mesh position={position} ref={ref}>
        <torusKnotGeometry args={[1.6, 0.4, 1000, 50]} />
        <MeshWobbleMaterial factor={6} speed={0.8} color="purple" />
      </mesh>
  );
};
