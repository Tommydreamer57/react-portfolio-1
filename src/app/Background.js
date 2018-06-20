import React, { Component } from 'react';

import Particles from 'react-particles-js';

export default class Background extends Component {
    render() {
        return (
            <div style={{
                width: '200vw',
                height: '200vh',
                position: 'fixed',
                top: '-25vh',
                left: '-50vw',
                zIndex: 10,
                background: 'white'
            }} >
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 200
                            },
                            shape: {
                                type: 'polygon',
                                polygon: {
                                    nb_sides: 7
                                },
                                stroke: {
                                    width: 1,
                                    color: '#000'
                                }
                            },
                            size: {
                                value: 10
                            },
                            color: {
                                value: '#F00',
                            },
                            opacity: {
                                value: 0.5,
                                random: false
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: '#F00',
                                opacity: 1,
                                width: 5,
                            },
                            move: {
                                enable: false,
                                speed: 5,
                                direction: 'none',
                                straight: false,
                                bounce: false,
                                out_mode: 'out'
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

// export default class Background extends Component {

//     constructor() {
//         super();
//         this.size = 50;
//         this.state = { rows: this.getRows() };
//     }

//     componentDidMount = () => window.addEventListener('resize', this.update)

//     update = () => this.setState({ rows: this.getRows() })

//     getRows = () => (
//         [...(window.innerHeight + this.size) / this.size].map(() => (
//             [...(window.innerWidth + this.size) / this.size]
//         ))
//     )

//     render() {
//         let {
//             size,
//             state: { rows }
//         } = this;
//         console.log(rows);
//         console.log([...10]);
//         return (
//             <div>
//                 {rows.map((row, y) => row.map((square, x) => <Square key={x + ' ' + y} y={y} x={x} size={size} />))}
//             </div>
//         );
//     }

// }

// class Square extends Component {

//     constructor() {
//         super();
//         let time = 4000;
//         this.duration = time + Math.random() * time;
//         this.state = { color: this.randomColor() };
//     }

//     componentDidMount = () => setInterval(this.update, this.duration - 1000)

//     update = () => this.setState({ color: this.randomColor(), spin: this.randomSpin() })

//     randomColor() {
//         var r = 32 - Math.random() * 32;
//         var g = 128 - Math.random() * 64;
//         var b = 192 - Math.random() * 64;
//         return `rgba(${r}, ${g}, ${b}, 0.5)`;
//     }

//     randomSpin() {
//         return Math.random() * 45 - 45 / 2;
//     }

//     render() {
//         let {
//             duration,
//             props: { x, y, size },
//             state: { color, spin }
//         } = this;
//         return (
//             <div
//                 style={{
//                     backgroundColor: `${color}`,
//                     position: `fixed`,
//                     height: `${size * 2}px`,
//                     width: `${size * 2}px`,
//                     top: `${y * size - size}px`,
//                     left: `${x * size - size}px`,
//                     transform: `rotate(${spin}deg)`,
//                     transition: `${duration / 1000}s`,
//                 }}
//             />
//         )
//     }

// }
