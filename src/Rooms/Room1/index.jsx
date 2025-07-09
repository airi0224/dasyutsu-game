
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';


export default function Room1() {
  const [seenPicture, setSeenPicture] = useState(false); // スペル直した！
  const [searchedBed, setSearchedBed] = useState(false);

  return (
    <div>
      
      <RoomView description={"寝室"} />
      <p className="room-text">目の前に、ベッドがある。</p>

      {!seenPicture && searchedBed && (
        <div>
          <p className="room-text">ベッドの下に君の写真が落ちていた!</p>
          <div className="button-group">
            <button className="horror-button" onClick={() => setSeenPicture(true)}>
              写真を見る
            </button>
          
          </div>
        </div>
      )}

      {searchedBed && seenPicture && (
        <div>
          <p className="room-text">何、パフェの写真か？!</p>
        </div>
      )}

      {!searchedBed && (
        <button className="horror-button" onClick={() => setSearchedBed(true)}>
          ベッドを調べる
        </button>
      )}
        <Link to="/start" className="horror-link button-group"　>元の部屋へ</Link>
    </div>
  );
}