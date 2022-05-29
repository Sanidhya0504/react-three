import "../styles/sphere.css";
import React, { useEffect } from "react";
import { extend } from "@react-three/fiber";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls });

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

{
  /*}
const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <OrbitControls
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
      enableZoom={false}
    />
  );
};
*/
}

const Sphere = ({ args, color, size }) => {
  return (
    <points>
      <sphereGeometry args={args} />
      <pointsMaterial size={size} color={color} sizeAttenuation />
    </points>
  );
};

export default function SphereComp() {
  return (
    <div className="sphere_wrap">
      <Canvas>
        <perspectiveCamera position={(0, 0, 0)}>
          <Sphere args={[5, 120, 32]} color={0x0000ff} size={0.02} />
          <Sphere args={[4, 60, 32]} color={0xf2f4f8} size={0.01} />
        </perspectiveCamera>
        <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
