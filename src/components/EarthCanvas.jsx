import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from './Loader'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')
    return (
        <primitive
            object={earth.scene}
            scale={3.5}
            position-y={0}
            rotation-y={0}
        />
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            gl={{ preserveDrawingBuffer: true }}
            camera={
                {
                    position: [-4, 3, 6],
                    fov: 45,
                    near:0.1,
                    far:200
                }}
        >
            <Suspense
                fallback={<CanvasLoader />}
            >
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}


export default EarthCanvas
