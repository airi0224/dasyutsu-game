// src/components/GameScreen.jsx
import React, { useState, useEffect } from 'react';




// 4x4の部屋構成（nullは入れない部屋）
const roomMap = [
  [1, 2, 3, 4],
  [5, null, 6, 7],
  [8, 9, 10, null],
  [11, 12, 13, 14],
];

const totalRooms = 14; // nullを除いた部屋数

function GameScreen({ onEnd }) {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // スタート: 1
  const [visitedRooms, setVisitedRooms] = useState([]);
  const [solvedPuzzles, setSolvedPuzzles] = useState([]);
  const [puzzleRooms, setPuzzleRooms] = useState([]);

  // ランダムで4部屋にパズルを設定（初回のみ）
  useEffect(() => {
    const allRooms = roomMap.flat().filter(n => n !== null);
    const shuffled = [...allRooms].sort(() => 0.5 - Math.random());
    setPuzzleRooms(shuffled.slice(0, 4));
  }, []);

  const currentRoom = roomMap[position.y][position.x];

  const move = (dx, dy) => {
    const newX = position.x + dx;
    const newY = position.y + dy;
    if (
      newY >= 0 && newY < 4 &&
      newX >= 0 && newX < 4 &&
      roomMap[newY][newX] !== null
    ) {
      const newRoom = roomMap[newY][newX];
      setPosition({ x: newX, y: newY });

      // 訪問済みに追加
      if (!visitedRooms.includes(newRoom)) {
        setVisitedRooms(prev => [...prev, newRoom]);
      }
    }
  };

  const solvePuzzle = () => {
    if (!solvedPuzzles.includes(currentRoom)) {
      setSolvedPuzzles(prev => [...prev, currentRoom]);
    }
  };

  const isGameClear = () =>
    visitedRooms.length === totalRooms &&
    solvedPuzzles.length === puzzleRooms.length &&
    currentRoom === 14;

  return (
    
    <div>
      <h2>部屋 {currentRoom}</h2>

      {puzzleRooms.includes(currentRoom) && !solvedPuzzles.includes(currentRoom) && (
        <div>
          <p>謎解き：この部屋には謎がある！</p>
          <button onClick={solvePuzzle}>謎を解く（仮）</button>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => move(0, -1)}>↑</button>
        <div>
          <button onClick={() => move(-1, 0)}>←</button>
          <button onClick={() => move(1, 0)}>→</button>
        </div>
        <button onClick={() => move(0, 1)}>↓</button>
      </div>

      {isGameClear() && (
        <div>
          <p>全部屋訪問＆謎解き完了！</p>
          <button onClick={onEnd}>私に会いに行く</button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
// import React, { useEffect, useState } from 'react';

// const messages = {
//   '0,0': '古びた日記…「ごめんね、私、限界だった」',
//   '1,0': '壊れたスマホ…最後のメッセージが見える',
//   '2,0': '音のない部屋。なぜか涙がこぼれそうになる。',
//   '0,1': 'ベッドの下に君の写真が落ちていた',
//   '1,1': '中心の部屋。誰かの気配を感じる…',
//   '2,3': '鏡にメッセージが…「忘れないで」',
//   '0,2': '壁に彫られた名前…「しゅーと」',
//   '1,2': '空っぽの部屋。でも温もりが残ってる',
//   '2,2': '彼女がいる──（ここがゴール）',
// };

// function GameScreen({ position, setPosition, onGoal }) {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const key = `${position.x},${position.y}`;
//     setMessage(messages[key] || 'この部屋には何もない…');
//     if (key === '2,2') {
//       setTimeout(() => {
//         onGoal();
//       }, 2000); // 2秒後にエンディングへ
//     }
//   }, [position]);


//   const move = (dx, dy) => {
//     const newX = position.x + dx;
//     const newY = position.y + dy;
//     if (newX >= 0 && newX <= 3 && newY >= 0 && newY <= 3) {
//       setPosition({ x: newX, y: newY });
//     }
//   };

//   return (
//     <div style={{ padding: 30 }}>
//       <h2>部屋 ({position.x},{position.y})</h2>
//       <p>{message}</p>
//       <div style={{ marginTop: 20 }}>
//         <button onClick={() => move(0, -1)}>↑</button><br />
//         <button onClick={() => move(-1, 0)}>←</button>
//         <button onClick={() => move(1, 0)}>→</button><br />
//         <button onClick={() => move(0, 1)}>↓</button>
//       </div>
//     </div>
//   );
// }

// export default GameScreen;