// import React from 'react';

// Number.prototype[Symbol.iterator] = function* () {
//     for (let i = 0; i < this; i++) {
//         yield i;
//     }
// }

// function randomColor() {
//     let r = Math.random() * 64;
//     let g = Math.random() * 128;
//     let b = Math.random() * 255;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// let rows = [...window.innerHeight / 10].map(() => [...window.innerWidth / 10]);
// let px = 'px';

// export default function Background() {
//     return (
//         <div>
//             {
//                 rows.map((row, y) => row.map((_, x) => <div className='background-square' key={x + ' ' + y} style={{ top: y * 10 + px, left: x * 10 + px, background: randomColor() }} />))
//             }
//         </div>
//     );
// }