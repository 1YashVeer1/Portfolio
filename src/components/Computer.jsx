import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { useMediaQuery, useTheme } from '@mui/material';


const Computers = () => {

    const theme = useTheme();
    const mobile =useMediaQuery( theme.breakpoints.down("sm"))

    const computer = useGLTF('./desktop_pc/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={2} groundColor="black" />
            <SpotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} />
            <primitive
                object={computer.scene}
                scale={mobile ? 0.3 : 0.6}
                position={mobile ? [0, -1, -0.4] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>

    )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense
                fallback={<CanvasLoader />}
            >
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}
export default ComputersCanvas;