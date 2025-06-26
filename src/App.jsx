// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [scene, setScene] = useState('title');
//   const [hasKey, setHasKey] = useState(false);

//   const startGame = () => setScene('game');
//   const escape = () => setScene('escape');


//   return (
//     <>
      
//       {scene === 'title' &&<TitleScreen onStart={startGame}/>}
//       {scene === 'game' &&<GameScreen onEscape={escape} hasKey={hasKey} setHasKey={setHasKey}/>}
//       {scene === 'escape' &&<EscapeScreen/>}

      
//     </>
//   );
// }

// export default App
import React, { useState } from 'react';
import TitleScreen from './components/TitleScreen.jsx';
import GameScreen from './components/GameScreen.jsx';
import EndScreen from './components/EndScreen.jsx';

function App() {
  const [scene, setScene] = useState('title'); // 'title', 'game', 'end'
  const [position, setPosition] = useState({ x: 1, y: 1 }); // 3x3マップの中心スタート

  const startGame = () => {
    setPosition({ x: 1, y: 1 });
    setScene('game');
  };

  const reachGoal = () => setScene('end');

  return (
    <>
      {scene === 'title' && <TitleScreen onStart={startGame} />}
      {scene === 'game' && (
        <GameScreen position={position} setPosition={setPosition} onGoal={reachGoal} />
      )}
      {scene === 'end' && <EndScreen />}
    </>
  );
}

export default App
