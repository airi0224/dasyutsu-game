import React from 'react';

function TitleScreen({ onStart }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>君は、まだここにいる気がする。</h1>
      <p>9つの部屋を探して、あの日の答えを見つけよう。</p>
      <button onClick={onStart}>探しに行く</button>
    </div>
  );
}

export default TitleScreen;