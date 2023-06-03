import React from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const Planet = () => {
  const texture = useLoader(TextureLoader, '/wax_red.jpg');

  return (
    <mesh>
      <sphereBufferGeometry args={[12, 32, 32]} />
      <meshMatcapMaterial matcap={texture} />
    </mesh>
  );
};

export default Planet;
