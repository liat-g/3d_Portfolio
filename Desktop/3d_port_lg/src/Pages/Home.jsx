import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect} from 'react';
import Loader from '../Components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Balloons from '../models/Balloons';

      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
        </div>  */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize= () => {
    let screenScale = null 
    let rotation = [0.1, 4.7, 0];
     let screenPosition =  [0, -6.5, -43];

    if (window.innerWidth < 768){
      screenScale = [2, 2, 2]

    } else 
    {
      screenScale = [4.5,4.5,4.5]
 
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize(); //passing props

  const adjustBalloonsForScreenSize= () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768){
      screenScale = [.05, .05, .05]
      screenPosition=[0, -1.5, 0];

    } else 
    {
      screenScale = [.01, .01, .01];
      screenPosition=[0, -4, -4];
 
    }
    return [screenScale, screenPosition]
  }

const [balloonsScale, balloonsPosition] = adjustBalloonsForScreenSize(); //passing props
  
  return (
    <section className="w-full h-screen relative">


        <Canvas
         className ={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[10,10,10]} intensity={8}/> 
            <ambientLight intesity={0.5}/>
            {/* <pointLight />
            <spotLight /> */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#b1e1ff" intensity={1}/>
            <Bird />
            <Sky />
            <Island 
            position={islandPosition} //these are our props from the function above 
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            />
            <Balloons 
                        isRotating={isRotating}
                        balloonsPosition={balloonsPosition} //these are our props from the function above 
                        balloonsScale={balloonsScale}
                        rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home