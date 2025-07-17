
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';


export default function Room1() {
  const [seenPicture, setSeenPicture] = useState(false); // スペル直した！
  const [searchedBed, setSearchedBed] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-red-800 space-y-4">

      <RoomView description={"寝室"} />
      <p className="">目の前に、ベッドがある。</p>

      {!seenPicture && searchedBed && (
        <div>
          <p className="">ベッドの下に君の写真が落ちていた!</p>
          <div className="">
            <button className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl" onClick={() => setSeenPicture(true)}>
              写真を見る
            </button>

          </div>
        </div>
      )}

      {searchedBed && seenPicture && (
        <div>
          <p className="">何、パフェの写真か？!</p>
        </div>
      )}

      {!searchedBed && (
        <button className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl" onClick={() => setSearchedBed(true)}>
          ベッドを調べる
        </button>
      )}
      <Link to="/start" className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"　>元の部屋へ</Link>
    </div>
  );
}
