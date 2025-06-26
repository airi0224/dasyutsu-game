import React from 'react';
import './TitleScreen.css';

function TitleScreen({ onStart }) {
  return (
    <div class="title-screen" style={{ textAlign: 'center', marginTop: 100 }}>
      <h1 class="game-title">君は、まだここにいる気がする。</h1>
      <p class="subtitle" >9つの部屋を探して、あの日の答えを見つけよう。</p>
      <button onClick={onStart}>探しに行く</button>
    </div>
  );
}

export default TitleScreen;
