import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const CCanvas = dynamic(() => import("../components/CCanvas"), { ssr: true });

  return (
    <>
      <div id="canvas-container" className="h-[75vh]">
        <CCanvas />
      </div>
      <main className="flex items-center justify-center ">
        <div className="p-8">
          <p className="text-3xl font-bold text-white">scroll down...</p>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Index",
    },
  };
}

export default Home;
