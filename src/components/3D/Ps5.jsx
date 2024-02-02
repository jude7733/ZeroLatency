/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\ps5.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ps5(props) {
  const { nodes, materials } = useGLTF("./models/ps5.gltf");
  return (
    <group
      {...props}
      dispose={null}
      scale={13}
      position={[0.5, -2.5, 0]}
      rotation={[0, 1.4, 0]}
    >
      <group scale={1.004}>
        <mesh
          geometry={nodes.Base002.geometry}
          material={materials.Base}
          position={[0, 0.016, 0]}
        />
        <mesh
          geometry={nodes.BaseBoolean.geometry}
          material={nodes.BaseBoolean.material}
          position={[0, 0.024, 0]}
          scale={0.977}
        />
        <group position={[0, 0.202, 0]} rotation={[0, -0.366, 0]}>
          <mesh
            geometry={nodes.mesh_2.geometry}
            material={materials["PS5Core.001"]}
          />
          <mesh
            geometry={nodes.mesh_2_1.geometry}
            material={materials["BlueLED.001"]}
          />
          <mesh
            geometry={nodes.mesh_2_2.geometry}
            material={materials["GlassLED.001"]}
          />
          <mesh
            geometry={nodes.mesh_2_3.geometry}
            material={materials["Chrome.002"]}
          />
          <mesh
            geometry={nodes.mesh_2_4.geometry}
            material={materials["BluePlastic.001"]}
          />
          <mesh
            geometry={nodes.mesh_2_5.geometry}
            material={materials["Gold.002"]}
          />
          <mesh
            geometry={nodes.mesh_2_6.geometry}
            material={materials["Material.004"]}
          />
          <mesh geometry={nodes.mesh_2_7.geometry} material={materials.Base} />
          <mesh
            geometry={nodes.mesh_2_8.geometry}
            material={materials["SidePanels.003"]}
          />
          <mesh
            geometry={nodes.mesh_2_9.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            geometry={nodes.mesh_2_10.geometry}
            material={materials["SidePanels.002"]}
          />
          <mesh
            geometry={nodes.mesh_2_11.geometry}
            material={materials.SidePanels}
          />
          <mesh
            geometry={nodes.mesh_2_12.geometry}
            material={materials.PS5Core}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/ps5.gltf");
