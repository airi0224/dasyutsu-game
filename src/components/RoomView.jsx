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

export default function RoomView({ description, children }) {
  return (
    <div className="">
      <p className="text-2xl text-center mb-2">{description}</p>
      {children}
    </div>
  );
}
