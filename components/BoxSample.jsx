import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

export const BoxSample = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta;
    ref.current.rotation.z += delta * 0.5;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <>
      <OrbitControls />
      <directionalLight position={[0, 0, 2]} intensity={0.7} />
      <mesh position={position} ref={ref}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
