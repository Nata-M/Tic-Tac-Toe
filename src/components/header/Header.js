import React from 'react';
import './Header.css';
import Button from '../button/Button';

function Header(props) {
  const { clicked, onclick } = props;

  return (
    <div className='Header'>
      <div>
        <Button click={clicked} text='Options' />
        <Button click={onclick} text='New Game' />
      </div>
      <div id='draw' className='none'>Draw</div>
      <div id='win1' className='none'>X wins</div>
      <div id='win2' className='none'>O wins</div>
    </div>
  )
}

export default Header