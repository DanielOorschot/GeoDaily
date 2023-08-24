import React from "react";

export function Earth(props: any) {

    return <>
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial color="orange" />

        </mesh>
    </>;


}