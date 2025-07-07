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
    <div className="room-view">
      <p className="game-title">{description}</p>
      {children}
    </div>
  );
}