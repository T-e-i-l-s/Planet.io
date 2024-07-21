import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { CircleLoader, ClipLoader } from "react-spinners";

function Model(props) {
  const { scene } = useGLTF(props.modelPath);
  return <primitive object={scene} {...props} />;
}

function Loading() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontFamily: "var(--font)",
        color: "var(--text-color)",
        zIndex: 1,
      }}
    >
      <CircleLoader size={50} color={"var(--text-color)"} loading={true} />
    </div>
  );
}

export default function View({ modelPath, scale, light }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas
          shadows
          camera={{ fov: 45 }}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
          <ambientLight intensity={light} />
          <Model scale={scale} modelPath={modelPath} />
          <OrbitControls rotateSpeed={0.5} minDistance={1} maxDistance={3} />
        </Canvas>
      </Suspense>
    </>
  );
}
