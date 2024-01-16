import React from 'react'
import { Html } from '@react-three/drei' //since we want the loader, which is 2d in our 3d canvas, we are using react-three/drei as a helper
const Loader = () => {
  return (
      <Html>
    <div className="flex justify-center items-center"> 
    <div className="w-20 h-20 border-2 border-opacity-20 
    border-blue-500 border-t-blue-500 rounded-full animate-spin" />

    </div>
    </Html>
  )
}

export default Loader