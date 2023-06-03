import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshLine, MeshLineMaterial } from '../components/three/meshline';
import { Scene } from '@/components/three/Scene';
import * as THREE from 'three';
import Planet from '@/components/three/Planet';
import Particles from '@/components/three/Particles';
import { SparkStorm } from '@/components/three/SparkStorm';
import { Sparks } from '@/components/three/Sparks';

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

extend({ MeshLine, MeshLineMaterial, OrbitControls });

export default function Home() {
  return (
    <div>
      <h1>My ThreeJS App</h1>
      <div style={{ height: '100vh' }}>
        <Canvas
          camera={{ fov: 100, position: [0, 0, 30] }}
          onCreated={({ gl, size, camera }) => {
            if (size.width < 600) {
              camera.position.z = 45;
            }
            gl.setClearColor(new THREE.Color('#020207'));
          }}
        >
          <Scene />

          {/* <Suspense fallback={null}>
            <Planet />
            <Particles count={5000} />
            <Sparks count={20} colors={colors.sunnyRainbow} />
            <SparkStorm count={500} colors={colors.malevolentIllusion} />
          </Suspense> */}
        </Canvas>
      </div>
    </div>
  );
}
