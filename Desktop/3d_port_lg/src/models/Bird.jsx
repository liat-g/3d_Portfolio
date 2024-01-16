import { useGLTF } from '@react-three/drei';
import React from 'react'
import birdScene from '../assets/3d/crow_fly.glb';

const Bird = () => {

  const { scene, animations } = useGLTF(birdScene)
  return (
    <mesh position={[-3,2.5,1]} scale={0.01, 0.01, 0.01}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird