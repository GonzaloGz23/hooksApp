import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { HooksApp } from './HooksApp';
import './index.css';
// import { TrafficLightWhitEffect } from './02-useEffect/TrafficLightWhitEffect';
// import { TrafficLightWhitHook } from './02-useEffect/TrafficLightWhitHook';
// import { PokemonPage } from './03-examples/PokemonPage';
import { FocusScreen } from './04-useRef/FocusScreen';
// import { TrafficLight } from './01-useState/TrafficLight';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWhitEffect /> */}
    {/* <TrafficLightWhitHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
