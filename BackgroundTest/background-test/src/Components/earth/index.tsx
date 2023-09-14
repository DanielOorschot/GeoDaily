import React from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stars} from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../textures/8k_earth_daymap.jpg";
import EquirectangularEarth from "../../textures/EquirectangularEarth2.png";
import {TextureLoader} from "three";

export function Earth(props: any) {

    const [colourMap] =  useLoader(TextureLoader, [EarthDayMap]);

    return (
    <>
    <ambientLight intensity={2}/>
    <Stars radius={300} depth={60} count={20000} factor={7} saturation={0}/>
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial/>
            <meshStandardMaterial map={colourMap} color="green"/>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>

        </mesh>
    </>);


}