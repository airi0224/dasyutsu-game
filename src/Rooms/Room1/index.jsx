
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';

export default function Room1() {

  const [seenPicture, setSeenPicutre] = useState(false)
  const [searchedBed, setSearchedBed] = useState(false)

  return (
    <div>
      <p>This is Room 1.</p>
      <RoomView description={"Room view 1"}/>
      <p>ここに、ベッドがあります。</p>
      {!seenPicture && searchedBed && (
        <div>
          <p>ベッドの下に君の写真が落ちていた!</p>
          <button onClick={() => setSeenPicutre(true)}>写真を見る</button>
        </div>
      )}

      {searchedBed && seenPicture && (
        <div>
          <p>何、パフェの写真か？!</p>
        </div>
      )}

      {!searchedBed && (
        <button onClick={() => setSearchedBed(true)}>ベッドを調べる</button>
      )}


      <Link to="/start">元の部屋へ</Link>
    </div>
  );
}
