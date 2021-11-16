import ReactDOM from "react-dom";
import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  useMemo,
  useCallback,
} from "react";
import {
  VRCanvas,
  useXREvent,
  Hands,
  Select,
  Hover,
  useXR,
  Interactive,
  RayGrab,
  useHitTest,
  ARCanvas,
  DefaultXRControllers,
} from "@react-three/xr";
// import { OrbitControls, Sky, Text, Plane, Box } from '@react-three/drei'
import { Box, Sky, Text, OrbitControls ,useGLTF} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader,primitive ,meshPhongMaterial } from '@react-three/fiber'

import { Group, Mesh } from "three";
import "./App.css";





function MapModel(props) {
 
  const { scene } = useGLTF('./React-XR-MAP/WebDigitalTwin.glb');
  return <primitive  scale={1}   object={scene} {...props} />
  
}


function PlayerExample() {
  const { player } = useXR();

  useFrame(() => {
    player.rotation.x = player.rotation.y += 0.01;
  });

  return null;
}


function Loading(){
  return(
    <div id='loading'>
      <img  src='./React-XR-MAP/loading.gif' />
  
    </div>
   

  )
}

function App() {
  return (
    <Suspense  fallback={<Loading/> }>
      <VRCanvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />


    
        
        <DefaultXRControllers />
        <OrbitControls />



          <RayGrab>
           <MapModel  args={[0.1, 0.1, 0.1]}  />
          </RayGrab>
      
        {/* <HitTestExample /> */}
      </VRCanvas>
    </Suspense>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
