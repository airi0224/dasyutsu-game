import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';




export default function Start() {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center bg-gray-800 text-red-600">
      <RoomView description={"何も無い部屋"} className="" >
        <p className="">中心の部屋。誰かの気配を感じる…</p>
        <p className="">ドアがつある。どっちへ行こうか？</p>
      </RoomView>


      <div className=" border-red-600 p-6 flex flex-col space-y-4 ">
        <Link to="/room1" className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl ">左</Link>
        <Link to="/room2" className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl ">右</Link>
      </div>

    </div>
  );
}

