/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 models/Gdsc.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GdscLogo(props) {
  const { nodes, materials } = useGLTF('./public/models/Gdsc.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.002']} position={[-2.002, 0, 0]} rotation={[1.572, 0.018, -0.093]} scale={57.669}>
        <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} />
        <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.004']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./public/models/Gdsc.gltf')
