import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from './HooksApp';
// import { MemoHook } from "./06-memos/MemoHook";
import "./index.css";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { TrafficLightWhitEffect } from './02-useEffect/TrafficLightWhitEffect';
// import { TrafficLightWhitHook } from './02-useEffect/TrafficLightWhitHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { TrafficLight } from './01-useState/TrafficLight';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWhitEffect /> */}
    {/* <TrafficLightWhitHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/*<TasksApp />*/}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
);
