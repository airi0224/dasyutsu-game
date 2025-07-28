import React from 'react';
import { Link } from 'react-router-dom';
// import './TitleScreen.css';

function TitleScreen() {
  return (
    <div className="bg-gray-800 text-red-600 w-full h-screen flex flex-col items-center justify-center" >
      <h1 className="text-3xl">君は、まだここにいる気がする。</h1>
      <p className="mb-10 text-xs">9つの部屋を探して、あの日の答えを見つけよう。</p>
      <Link to="/start">
        <button className='border p-4'>探しに行く</button>
      </Link>
    </div>
  );
}

export default TitleScreen;
