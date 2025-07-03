import React from 'react';
import { Link } from 'react-router-dom';
import './TitleScreen.css';

function TitleScreen() {
  return (
    <div className="title-screen" style={{ textAlign: 'center', marginTop: 100 }}>
      <h1 className="game-title">君は、まだここにいる気がする。</h1>
      <p className="subtitle">9つの部屋を探して、あの日の答えを見つけよう。</p>
      <Link to="/start">
        <button>探しに行く</button>
      </Link>
    </div>
  );
}

export default TitleScreen;
