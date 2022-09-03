import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const CCanvas: React.FC = () => {
  const DeskCanvas = dynamic(() => import("./DeskCanvas"), { ssr: false });
  return (
    <Canvas>
      <DeskCanvas />
    </Canvas>
  );
};

export default CCanvas;
