import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Table } from "./Table";
import { Screen } from "./Screen";

const DeskCanvas: React.FC = () => {
  const { size } = useThree();
  return (
    <>
      <PerspectiveCamera
        manual
        makeDefault
        position={[0, 0.5 * size.width, 2 * size.width]}
        near={0.1}
        far={1000}
        fov={40}
        aspect={size.width / size.height}
      />
      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={4}
        target={[0, 0.5, 0]}
      />

      <Suspense fallback={null}>
        <Table />
        <Screen
          scale={0.0008}
          rotation={[0, -Math.PI / 2, 0]}
          position={[0, 0.632, -0.32]}
        />
        <Screen
          scale={0.0008}
          rotation={[0, -1.39626, 0]}
          position={[-0.7, 0.632, -0.26]}
        />
        <Screen
          scale={0.0008}
          rotation={[0, -1.74533, 0]}
          position={[0.7, 0.632, -0.26]}
        />

        {/* <Environment files={"reinforced_concrete.hdr"} /> */}
        {/* <Environment files={"brown_photostudio.hdr"} /> */}
        <Environment files={"small_cathedral.hdr"} />
      </Suspense>
    </>
  );
};

export default DeskCanvas;
