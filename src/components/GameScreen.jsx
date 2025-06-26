import React, { useEffect, useState } from 'react';

const messages = {
  '0,0': '古びた日記…「ごめんね、私、限界だった」',
  '1,0': '壊れたスマホ…最後のメッセージが見える',
  '2,0': '音のない部屋。なぜか涙がこぼれそうになる。',
  '0,1': 'ベッドの下に君の写真が落ちていた',
  '1,1': '中心の部屋。誰かの気配を感じる…',
  '2,3': '鏡にメッセージが…「忘れないで」',
  '0,2': '壁に彫られた名前…「しゅーと」',
  '1,2': '空っぽの部屋。でも温もりが残ってる',
  '2,2': '彼女がいる──（ここがゴール）',
};

function GameScreen({ position, setPosition, onGoal }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const key = `${position.x},${position.y}`;
    setMessage(messages[key] || 'この部屋には何もない…');
    if (key === '2,2') {
      setTimeout(() => {
        onGoal();
      }, 2000); // 2秒後にエンディングへ
    }
  }, [position]);


  const move = (dx, dy) => {
    const newX = position.x + dx;
    const newY = position.y + dy;
    if (newX >= 0 && newX <= 3 && newY >= 0 && newY <= 3) {
      setPosition({ x: newX, y: newY });
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>部屋 ({position.x},{position.y})</h2>
      <p>{message}</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => move(0, -1)}>↑</button><br />
        <button onClick={() => move(-1, 0)}>←</button>
        <button onClick={() => move(1, 0)}>→</button><br />
        <button onClick={() => move(0, 1)}>↓</button>
      </div>
    </div>
  );
}

export default GameScreen;