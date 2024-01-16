import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/crow_fly.glb';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene) //need this to get to the animatios
  const { actions } = useAnimations(animations, birdRef); //then pass the animations to the ref for the model 


  useEffect(() => {
    actions["GltfAnimation 0"].play();

  }, [])

  useFrame(({clock, camera }) => { //clock keep tracks of the time it has been running
    //update y-position to simulate the flight moving in a sin wave 
birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

//check if the bird reached a certain endpoint relative to the camera
if (birdRef.current.position.x > camera.position.x + 20){
  //change direction to backward and rotate the bird 180 degrees on the y axis
  birdRef.current.rotation.y = Math.PI;
} else if (birdRef.current.position.x < camera.position.x - 20) {
  //change direction to forward and reset the bird's rotation
  birdRef.current.rotation.y = 0;
}
    if (birdRef.current.rotation.y === 0){
      //moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;

    } else {
      //moving backward
    birdRef.current.position.x -= 0.01;
    birdRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh position={[-3,2.5,1]} scale={0.01, 0.01, 0.01} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird