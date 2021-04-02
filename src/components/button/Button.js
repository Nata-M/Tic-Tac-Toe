import React from 'react';
import './Button.css';

const Button = (props) => {
  const { text, click } = props;

  return (
    <button
      onClick={click}
      type='button'
      className='Button'>{text}
    </button>
  )
}

export default Button