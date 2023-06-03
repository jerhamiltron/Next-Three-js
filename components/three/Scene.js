import React, { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
import { Sparks } from './Sparks.js';
import { SparkStorm } from './SparkStorm.js';
import Particles from '@/components/three/Particles';
import Planet from '@/components/three/Planet';

const colors = {
  malevolentIllusion: [
    '#c06995',
    '#de77c7',
    '#df86df',
    '#d998ee',
    '#ceadf4',
    '#c6bff9',
  ],
  sunnyRainbow: [
    '#fbe555',
    '#fb9224',
    '#f45905',
    '#be8abf',
    '#ffeed0',
    '#feff89',
  ],
};

export const Controls = (props) => {
  const { gl, camera } = useThree();
  return <orbitControls args={[camera, gl.domElement]} {...props} />;
};

export const Scene = () => {
  return (
    <Suspense fallback={null}>
      <>
        <Controls />
        <pointLight distance={100} intensity={4} color='white' />
        <Planet />
        <Particles count={5000} />
        <Sparks count={200} colors={colors.malevolentIllusion} />
        <SparkStorm count={500} colors={colors.sunnyRainbow} />
      </>
    </Suspense>
  );
};
