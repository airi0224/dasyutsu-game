
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import RoomView from '../../components/RoomView';


// export default function Room1() {
//   const [seenPicture, setSeenPicture] = useState(false); // スペル直した！
//   const [searchedBed, setSearchedBed] = useState(false);

//   return (
//     <div className="relative w-full h-screen flex flex-row items-center justify-center bg-gray-800 text-red-600 space-x-4">


      
//       <RoomView description={"寝室"} className={""} />
//       <p className="">目の前に、ベッドがある。</p>

//       {!seenPicture && searchedBed && (
//         <div className=' relative flex flex-col justify-center space-y-4'>
//           <p className="">ベッドの下に君の写真が落ちていた!</p>
//           <button className="mx-auto bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl" onClick={() => setSeenPicture(true)}>
//             写真を見る
//           </button>

//         </div>
//       )}

//       {searchedBed && seenPicture && (
//         <div>
//           <p className="">何、パフェの写真か？!</p>
//         </div>
//       )}

//       {!searchedBed && (
        

//          <button className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl" onClick={() => setSearchedBed(true)}>
//           ベッドを調べる
//          </button>
       
//       )}
//       < Link to="/start" className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"　>元の部屋へ</Link>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';

export default function Room1() {
  const [seenPicture, setSeenPicture] = useState(false);
  const [searchedBed, setSearchedBed] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-row justify-between items-center bg-gray-800 text-red-600 px-10">

      {/* 左カラム：RoomView + テキスト */}
      <div className="flex flex-col space-y-4">
        <RoomView description={"寝室"}>
        <p>目の前に、ベッドがある。</p>

        {searchedBed && !seenPicture && (
          <p>ベッドの下に君の写真が落ちていた!</p>
        )}

        {searchedBed && seenPicture && (
          <p>何、パフェの写真か？!</p>
        )}
      </RoomView>
      </div>

      {/* 右カラム：ボタン2つ */}
      <div className="flex flex-col items-end space-y-4">
        {!searchedBed && (
          <button
            className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
            onClick={() => setSearchedBed(true)}
          >
            ベッドを調べる
          </button>
        )}

        {searchedBed && !seenPicture && (
          <button
            className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
            onClick={() => setSeenPicture(true)}
          >
            写真を見る
          </button>
        )}

        <Link
          to="/start"
          className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
        >
          元の部屋へ
        </Link>
      </div>
    </div>
  );
}
