import React from 'react';
import './Footer.css';


const Footer = (props) => {
  const { icon, click } = props;

  return (
    <button onClick={click} className='buttonClass' type='button'>
      <i className={icon}></i>
    </button>
  )
}

export default Footer