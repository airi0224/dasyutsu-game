// src/rooms/Room00.jsx
import React, { useState } from 'react';

const Room00 = ({ onSolve }) => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === '4') {
      setIsCorrect(true);
      setError('');
      setTimeout(() => {
        onSolve(); // 正解したら次の部屋へ
      }, 1000);
    } else {
      setError('…違うみたい。もう一度考えてみよう。');
    }
  };

  return (
    <div className="room">
      <h2>Room 00</h2>
      <p>壁に数式が書かれている。</p>
      <blockquote>2 + 2 = ?</blockquote>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="答えを入力"
        />
        <button type="submit">答える</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isCorrect && <p style={{ color: 'green' }}>正解！次の部屋に進みます…</p>}
    </div>
  );
};

export default Room00;
