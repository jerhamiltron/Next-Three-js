import Box from '@/components/three/Box';
import Particles from '@/components/three/Particles';
import Planet from '@/components/three/Planet';
import styles from '@/styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <div>
      <h1>My ThreeJS App</h1>
      <div style={{ height: '100vh' }}>
        <Canvas camera={{ fov: 100, position: [0, 0, 30] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Planet />
          <Particles count={5000} />
          <Box position={[0, 0, -1]} />
        </Canvas>
      </div>
    </div>
  );
}
