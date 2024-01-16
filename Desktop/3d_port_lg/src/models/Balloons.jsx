import { useGLTF } from '@react-three/drei';
import React from 'react'
import balloonScene from '../assets/3d/balloons.glb';

const Balloons = ({isRotating, ...props}) => { //spreading the props to bring them into our mesh

  const { scene, animations } = useGLTF(balloonScene)
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Balloons