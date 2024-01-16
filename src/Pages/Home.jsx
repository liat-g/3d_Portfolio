import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect} from 'react';
import Loader from '../Components/Loader';
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Balloons from '../models/Balloons';
import HomeInfo from '../Components/HomeInfo';


const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize= () => {
    let screenScale = null 
    let rotation = [0.1, 4.7, 0];
     let screenPosition =  [0, -6.5, -43];

    if (window.innerWidth < 768){
      screenScale = [3, 3, 3]

    } else 
    {
      screenScale = [6,6,6]
 
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize(); //passing props

  const adjustBalloonsForScreenSize= () => {
    let screenScale, screenPosition;
   

    if (window.innerWidth < 768){
      screenScale = [.005, .005, .005]
      screenPosition=[0, -1.5, 0];

    } else 
    {
      screenScale = [.001, .001, .001];
      screenPosition=[0, -4, -4];
 
    }
    console.log(screenScale)
    return [screenScale, screenPosition]
  }

const [balloonsScale, balloonsPosition] = adjustBalloonsForScreenSize(); //passing props
  
  return (
    <section className="w-full h-screen relative">

       <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>  
        <Canvas
         className ={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[5,7,10]} intensity={6}/> 
            <ambientLight intesity={.25}/>
            {/* <pointLight />
            <spotLight /> */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#b1e1ff" intensity={1}/>
            <Bird />
            <Sky isRotating={isRotating}/>
            <Island 
            position={islandPosition} //these are our props from the function above 
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
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