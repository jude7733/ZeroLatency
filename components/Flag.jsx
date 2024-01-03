import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";

export function Flag({ position }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  useCursor(hovered);
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(
      ref.current.distort,
      hovered ? 0.4 : 0,
      hovered ? 0.05 : 0.01
    );
  });
  return (
    <mesh
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[8, 5, 1]}
      ref={ref}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={5}>
        <GradientTexture
          stops={[0, 0.8, 1]}
          colors={["#e63946", "#f1faee", "#a8dadc"]}
          size={100}
        />
      </MeshDistortMaterial>
    </mesh>
  );
}
