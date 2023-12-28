import { OrbitControls } from "@react-three/drei"

export const Experience = () => {
    return (
        <>
            <OrbitControls autoRotate autoRotateSpeed={10} />
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}