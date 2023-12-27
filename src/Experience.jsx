import { Perf } from "r3f-perf";
import { Level } from "./Level.jsx";
import Lights from "./Lights.jsx";
import { Physics, Debug } from "@react-three/rapier";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.jsx";
import Effects from "./Effects.jsx";
export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);
  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      <Perf position="top-left" />
      {/* <OrbitControls makeDefault /> */}
      <Physics>
        <Level count={blocksCount} seed={blocksSeed} />
        <Lights />
        {/* <Debug /> */}
        <Player />
      </Physics>
      <Effects />
    </>
  );
}
