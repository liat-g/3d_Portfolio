import { useAnimations, useGLTF} from '@react-three/drei';
import { useRef, useEffect } from 'react'
import balloonScene from '../assets/3d/balloons.glb';

const Balloons = ({isRotating, ...props}) => { //spreading the props to bring them into our mesh
  const ref = useRef();
  const { scene, animations } = useGLTF(balloonScene)
  const { actions } = useAnimations(animations, ref);

  useEffect (() => {
    console.log({isRotating})
    if (isRotating){
      actions['balloon groupAction.001'].play();
    } else {
      actions['balloon groupAction.001'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Balloons