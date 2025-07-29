import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomView from '../../components/RoomView';

// export default function Room1() {
//   const [seenPicture, setSeenPicture] = useState(false);
//   const [searchedBed, setSearchedBed] = useState(false);

//   return (
//     <div className="relative w-full h-screen flex flex-row justify-between items-center bg-gray-800 text-red-600 px-10">

//       {/* 左カラム：RoomView + テキスト */}
//       <div className="flex flex-col space-y-4">
//         <RoomView description={"寝室"}>
//         <p>目の前に、ベッドがある。</p>

//         {searchedBed && !seenPicture && (
//           <p>ベッドの下に君の写真が落ちていた!</p>
//         )}

//         {searchedBed && seenPicture && (
//           <p>何、パフェの写真か？!</p>
//         )}
//       </RoomView>
//       </div>

//       {/* 右カラム：ボタン2つ */}
//       <div className="flex flex-col items-end space-y-4">
//         {!searchedBed && (
//           <button
//             className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
//             onClick={() => setSearchedBed(true)}
//           >
//             ベッドを調べる
//           </button>
//         )}

//         {searchedBed && !seenPicture && (
//           <button
//             className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
//             onClick={() => setSeenPicture(true)}
//           >
//             写真を見る
//           </button>
//         )}

//         <Link
//           to="/start"
//           className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
//         >
//           元の部屋へ
//         </Link>
//       </div>
//     </div>
//   );
// }


export default function Room2() {
  const [checkedSofa, setCheckedSofa] = useState(false);
  const [foundLetter, setFoundLetter] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-row justify-between items-center bg-gray-900 text-red-600 px-10">

      {/* 左カラム：RoomView + テキスト */}
      <div className="flex flex-col space-y-4">
        <RoomView description={"リビング"}>
          <p>あの頃よく一緒に過ごした、古いリビング。</p>

          {checkedSofa && !foundLetter && (
            <p>ソファのクッションの下に何かある…</p>
          )}

          {foundLetter && (
            <p>――手紙だ。「あのとき、ちゃんと伝えられなかったけど…」</p>
          )}
        </RoomView>
      </div>

      {/* 右カラム：ボタン */}
      <div className="flex flex-col items-end space-y-4">
        {!checkedSofa && (
          <button
            className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
            onClick={() => setCheckedSofa(true)}
          >
            ソファを調べる
          </button>
        )}

        {checkedSofa && !foundLetter && (
          <button
            className="bg-black text-red-600 border-2 border-red-600 py-3 px-5 text-xl"
            onClick={() => setFoundLetter(true)}
          >
            手紙を読む
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

