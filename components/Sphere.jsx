import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Sphere = ({ position }) => {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  useFrame(() => {
    hover
      ? ref.current.scale.set(1.2, 1.2, 1.2)
      : ref.current.scale.set(1, 1, 1);
    ref.current.rotation.y += 0.02;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });
  return (
    <mesh
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      ref={ref}
      position={position}
    >
      <sphereGeometry />
      <meshStandardMaterial color={hover ? "orange" : "hotpink"} wireframe />
    </mesh>
  );
};
