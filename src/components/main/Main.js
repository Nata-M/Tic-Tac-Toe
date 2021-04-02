import React, { useState } from 'react';
import './Main.css';
import Header from '../header/Header';
import Board from '../board/Board';
import BoardControl from '../control/BoardControl';

const Main = () => {
  const [select, setSelect] = useState();
  let [value, setValue] = useState();
  let [val, setVal] = useState();


  const onChangeValue = (event) => {
    document.getElementById('table1').className = 'none'
    let num = event.target.value
    setValue(num)
  }

  const onChangeFunction = (event) => {
    let num = event.target.value
    setVal(num)
    console.log(val)
  }

  const handleClick = () => {
    setSelect(!select);
    let table = document.getElementById('table1');
    table.style.setProperty('grid-template-rows', `repeat(${value}, 1fr)`)
    table.style.setProperty('grid-template-columns', `repeat(${value}, 1fr)`)
    table.className = 'Table'
  }

  const handleChange = () => {
    let num = document.getElementsByClassName('cell').length;
    document.getElementById('draw').className = 'none';
    document.getElementById('win1').className = 'none';
    for (let i = 0; i < num; i++) {
      var element = document.getElementById(i);
      if (element.hasChildNodes()) {
        element.removeChild(element.childNodes[0]);
      }
    }
  }
  return (
    <div className='Main'>
      <BoardControl
        open={select}
        onChange={onChangeValue}
        onchange={onChangeFunction}
        click={handleClick} />
      <Header
        onclick={handleChange}
        clicked={() => { setSelect(!select) }} />
      <Board width={value} length={value} win={value} />
    </div>
  )
}

export default Main