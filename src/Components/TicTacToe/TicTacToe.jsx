import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import crossIcon from '../Assets/cross.png'
import circleIcon from'../Assets/circle.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [winner,setWinner] = useState(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e , num) => {
    if(lock){
      return 0;
    }
    if(count%2 === 0 ) {
      e.target.innerHTML =`<img src= '${crossIcon}'>`;
      data[num]="X";
      setCount(++count);
    }
    else {
      e.target.innerHTML =`<img src= '${circleIcon}'>`;
      data[num]="O";
      setCount(++count);
    }
    checkWinner();
  }

    const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (data[a] === data[b] && data[b] === data[c] && data[c] !== "") {
          won(data[a]);
        }
      }
    }

    const won = (winner) => {
      setLock(true);
      setWinner(winner);
    }

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    box_array.map(e => {
      e.current.innerHTML ="";
    })
  }

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => {toggle(e, 0)}}></div>
          <div className="boxes" ref={box2}  onClick={(e) => {toggle(e, 1)}}></div>
          <div className="boxes" ref={box3}  onClick={(e) => {toggle(e, 2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4}  onClick={(e) => {toggle(e, 3)}}></div>
          <div className="boxes" ref={box5}  onClick={(e) => {toggle(e, 4)}}></div>
          <div className="boxes" ref={box6}  onClick={(e) => {toggle(e, 5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7}  onClick={(e) => {toggle(e, 6)}}></div>
          <div className="boxes" ref={box8}  onClick={(e) => {toggle(e, 7)}}></div>
          <div className="boxes" ref={box9}  onClick={(e) => {toggle(e, 8)}}></div>
        </div>
      </div>
      {(lock &&
        <h2 className="win-title">Congratulations, {winner} won!</h2>
      )}
      <button className='resetBtn' onClick={() => reset()}>Reset Game</button>
    </div>
  )
}

export default TicTacToe;