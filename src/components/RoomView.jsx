// import './RoomView.css';
// import React from 'react';

// export default function RoomView({ description }) {

//   return (
//     <div>
//       <p class="game-title">{description}</p>
//     </div>
//   )
// }

// components/RoomView.jsx
import './RoomView.css';
import React from 'react';

export default function RoomView({ description, className, children }) {
  return (
    <div className={" border-red-800 border-2 bg-black w-lg min-h-48 " + className}>
      <p className="text-2xl text-center mb-2">{description}</p>
      <div className='flex flex-col items-center justify-center'>
 {children}
      </div>
     
    </div>
  );
}
