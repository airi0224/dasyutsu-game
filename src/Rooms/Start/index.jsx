import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';




export default function Start() {
  return (
    <div className="start-container">
      <RoomView description={"何も無い部屋"} >
      
      <p className="room-text">中心の部屋。誰かの気配を感じる…</p>
      <p className="room-text">ドアが２つある。どっちへ行こうか？</p>
      </RoomView>
   
      
      <div className="button-group">
       <Link to="/room1" className="horror-link">左</Link>
       <Link to="/room2" className="horror-link">右</Link>
      </div>
     
    </div>
  );
}

