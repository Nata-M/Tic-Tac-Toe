import React, { useState } from 'react';
import './Board.css';


function Board(props) {
  let { width, length, win } = props;
  const [open, setOpen] = useState(false);
  const tablecells = Array.from({ length: width * length }, (_, i) => i + 1);

  const handleClick = (event) => {
    let num = document.getElementsByClassName('cell').length;
    let children = 0;
    setOpen(!open);
    let text;
    let id = event.target.id;
    var elem = document.getElementById(id);
    let icon = document.createElement('h1');
    icon.className = 'text';
    text = document.createTextNode('X');
    if (open) {
      text = document.createTextNode('O')
    }
    icon.appendChild(text);
    elem.appendChild(icon);

    let child = 0;
    for (let i = 0; i < num; i++) {
      var element = document.getElementById(i);
      if (element.hasChildNodes() && elem.childNodes[0].innerText === 'X') {
        child++;
        if (child === win) {
          document.getElementById('win1').className = 'draw';
        }
      }
    }
    for (let i = 0; i < num; i++) {
      var el = document.getElementById(i);
      if (el.hasChildNodes()) {
        children++;
        if (children === num) {
          document.getElementById('draw').className = 'draw'
        }
      }
    }
  }

  return (
    <div className='Board' id='board'>
      <div className='none' id='table1'>
        {tablecells.map((row, idx) => {
          return (
            <button onClick={handleClick} className='cell' key={idx} type='button' id={idx}>
            </button>
          )
        })}
      </div>
    </div>
  )
}


export default Board