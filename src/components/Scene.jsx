import Ground from "./Ground"
import Tree from "../utils/Tree"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Color } from "three"



export default function Scene() {


    const refTrees = useRef(null)


    useFrame(() => {

        const { current: group } = refTrees;

        if (group) {
            // group.rotation.x = group.rotation.y += 0.01;
        }

    })

    return (
        <>
            <ambientLight intensity={0.1} />

            <directionalLight
                color='white'
                position={[30, 30, 30]}
                intensity={0.1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <Tree
                ref={refTrees}
                position={[0, 0, 4]}
                colors={[
                    new Color('#427062').convertLinearToSRGB(),
                    new Color('#33594e').convertLinearToSRGB(),
                    new Color('#234549').convertLinearToSRGB(),
                    new Color('#1e363f').convertLinearToSRGB(),
                ]}
            />


            <Tree
                ref={refTrees}
                position={[0, 0, -4]}

                colors={[
                    new Color('#4a8d7e').convertLinearToSRGB(),
                    new Color('#377f6a').convertLinearToSRGB(),
                    new Color('#184f52').convertLinearToSRGB(),
                    new Color('#143b36').convertLinearToSRGB(),
                ]}
            />
            <Ground />
            <OrbitControls minDistance={10} maxDistance={400} />

        </>
    )

}

