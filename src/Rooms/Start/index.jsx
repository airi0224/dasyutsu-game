import React from 'react';
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div>
      <p>中心の部屋。誰かの気配を感じる…</p>
      <p>ドアが二つある。でこへ行こうか？</p>
      <Link to="/room1">西</Link>
      <Link to="/room2">東</Link>
    </div>
  );
}

