import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useCustomization } from '../utils/Customization';

const Model = ({ ...props }) => {

  const { material, holder, gemColor } = useCustomization();

  const group = useRef()
  const { nodes, materials } = useGLTF('./models/bear_configurator.glb')

  const goldTexture = useTexture({
    map: "./textures/gold/Metal_Gold_001_basecolor.jpg", 
    normalMap: "./textures/gold/Metal_Gold_001_normal.jpg", 
    roughnessMap: "./textures/gold/Metal_Gold_001_roughness.jpg", 
    aoMap: "./textures/gold/Metal_Gold_001_ambientOcclusion.jpg", 
  })

  goldTexture.map.repeat.set(2, 2);
  goldTexture.normalMap.repeat.set(2, 2);
  goldTexture.roughnessMap.repeat.set(2, 2);
  goldTexture.aoMap.repeat.set(2, 2);

  goldTexture.map.wrapS = goldTexture.map.wrapT = THREE.RepeatWrapping; 
  goldTexture.normalMap.wrapS = goldTexture.normalMap.wrapT = THREE.RepeatWrapping; 
  goldTexture.roughnessMap.wrapS = goldTexture.roughnessMap.wrapT = THREE.RepeatWrapping; 
  goldTexture.aoMap.wrapS = goldTexture.aoMap.wrapT = THREE.RepeatWrapping; 


 const metalTexture = useTexture({
    map: "./textures/metal/Metal_006_basecolor.jpg", 
    normalMap: "./textures/metal/Metal_006_normal.jpg", 
    roughnessMap: "./textures/metal/Metal_006_roughness.jpg", 
    aoMap: "./textures/metal/Metal_006_ambientOcclusion.jpg", 
  })

  metalTexture.map.repeat.set(2, 2);
  metalTexture.normalMap.repeat.set(2, 2);
  metalTexture.roughnessMap.repeat.set(2, 2);
  metalTexture.aoMap.repeat.set(2, 2);

  metalTexture.map.wrapS = metalTexture.map.wrapT = THREE.RepeatWrapping; 
  metalTexture.normalMap.wrapS = metalTexture.normalMap.wrapT = THREE.RepeatWrapping; 
  metalTexture.roughnessMap.wrapS = metalTexture.roughnessMap.wrapT = THREE.RepeatWrapping; 
  metalTexture.aoMap.wrapS = metalTexture.aoMap.wrapT = THREE.RepeatWrapping; 

 
  const gemTexture = useTexture({
    // map: "./textures/stone/Crystal_001_COLOR.jpg", //not needed if we need to change colors
    normalMap: "./textures/stone/Crystal_001_NORM.jpg", 
    roughnessMap: "./textures/stone/Crystal_001_SPEC.jpg", 
    aoMap: "./textures/stone/Crystal_001_OCC.jpg", 
  })

  // gemTexture.map.repeat.set(2, 2);
  gemTexture.normalMap.repeat.set(2, 2);
  gemTexture.roughnessMap.repeat.set(2, 2);
  gemTexture.aoMap.repeat.set(2, 2);

  // gemTexture.map.wrapS = gemTexture.map.wrapT = THREE.RepeatWrapping; 
  gemTexture.normalMap.wrapS = gemTexture.normalMap.wrapT = THREE.RepeatWrapping; 
  gemTexture.roughnessMap.wrapS = gemTexture.roughnessMap.wrapT = THREE.RepeatWrapping; 
  gemTexture.aoMap.wrapS = gemTexture.aoMap.wrapT = THREE.RepeatWrapping; 


  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 60, 0]} he={[40, 40, 40]}>
      <mesh geometry={nodes['codebear_configurator-0-holder_1'].geometry} visible={holder === 2}>
        <meshStandardMaterial {...(material) === "gold" ? goldTexture : metalTexture} />
      </mesh>

      <mesh geometry={nodes['codebear_configurator-3-redstone'].geometry}>
        <meshStandardMaterial {...gemTexture} color={gemColor.color} />
      </mesh>

      <mesh geometry={nodes['codebear_configurator-4-holder_0'].geometry} visible={holder === 1}>
         <meshStandardMaterial {...(material) === "gold" ? goldTexture : metalTexture} />
      </mesh>
      <mesh geometry={nodes['codebear_configurator-5-ringframe_0'].geometry}>
        <meshStandardMaterial {...(material) === "gold" ? goldTexture : metalTexture} />
      </mesh>

      <mesh geometry={nodes['codebear_configurator-6-wizardhat'].geometry} material={materials['Material.002']} visible={false}/>
      <mesh geometry={nodes['codebear_configurator-7-candle'].geometry} material={materials['Material.010']} />
      <mesh geometry={nodes['codebear_configurator-8-wand'].geometry} material={materials['Material.011']} visible={false} />

      <mesh geometry={nodes['codebear_configurator-9-figurine'].geometry} material={materials['Material.003']} />
      <mesh geometry={nodes['codebear_configurator-10-bear'].geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('./models/bear_configurator.glb');

export default Model;
