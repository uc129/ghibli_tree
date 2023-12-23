import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";


import '../App.css'
import Ground from "./Ground";



function FiberContainer() {

    return (
        <>
            <h2> Studio Ghibli Style Trees, with three js</h2>
            <p>Use mouse to play</p>
            <Canvas id="canvas" camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }} shadows>
                <Scene />
                <Ground />
                {/* <OrbitControls  minDistance={10} maxDistance={400} autoRotate /> */}

            </Canvas>
        </>
    )
}

export default FiberContainer;