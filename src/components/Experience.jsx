import { 
MeshReflectorMaterial,  
PresentationControls, 
Stage } from "@react-three/drei";
// import { useLoader } from '@react-three/fiber';
// import { Suspense } from "react";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model from "./Model";


const Experience = () => {
 //const gltf = useLoader(GLTFLoader, './models/codebear.gltf')
  return ( 
    <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={'city'} intensity={0.6} contactShadow={false}>
          {/* <Suspense fallback={null}> */}
            <Model />
          {/* </Suspense> */}
        </ Stage>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
            <planeGeometry args={[200, 200]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthSale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color={"#101010"}
              metalness={0.5}
            /> 
        </mesh>

    </ PresentationControls>
 
  )
}

export default Experience