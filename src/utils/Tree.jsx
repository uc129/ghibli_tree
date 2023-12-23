import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

import { GhibliShader } from "./shaders/ghibliShader";



const Tree = forwardRef((props, ref) => {

    const { nodes } = useGLTF('/trees.glb');

    // const toneMap = useMemo(() => {
    //     const format = RedFormat;
    //     const colors = new Uint8Array(4);

    //     for (let c = 0; c <= colors.length * 256; c++) {
    //         colors[c] = (c / colors.length) * 256;
    //     }
    //     const gradientMap = new DataTexture(colors, colors.length, 1, format);
    //     gradientMap.needsUpdate = true;
    //     return gradientMap;

    // }, []);


    const uniforms = useMemo(() => {

        return {
            // ...GhibliShader.uniforms,
            // uBaseColor: { value: new Color('#49897C') },
            // uAmbientLightColor: { value: new Color('#050505') },
            // uDirLightColor: { value: new Color('white') },
            // uDirLightPos: { value: new Vector3(15, 15, 15) },
            // uLineColor1: { value: new Color('#808080') },
            // uLineColor2: { value: new Color('black') },

            colorMap: {
                value: props.colors
            },
            brightnessThresholds: {
                value: [0.9, 0.45, 0.001]
            },
            lightPosition: {
                value: new Vector3(15, 15, 15)
            },
        }

    }, [props.colors])


    return (
        <group {...props} ref={ref} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Foliage.geometry}
                position={[0.33, -0.05, -0.68]}
            >
                {/* <meshToonMaterial
                    color={new Color('#234549').convertLinearToSRGB()}
                /> */}

                {/* <shaderMaterial attach={'material'} {...ToonShader} uniforms={uniforms} /> */}

                <shaderMaterial attach={'material'} {...GhibliShader} uniforms={uniforms} />

                {/* <ToonShader /> */}

            </mesh>
        </group>
    );
});

useGLTF.preload('/trees.glb');

export default Tree;

