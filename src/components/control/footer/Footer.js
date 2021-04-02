import React from 'react';
import './Footer.css';
import FooterButton from './FooterButton';

const Footer = (props) => {
  const { click } = props;

  return (
    <div className='Footer'>
      <FooterButton click={click} icon='fa fa-check' />
      <FooterButton click={click} icon='fa fa-times' />
    </div>
  )
}

export default Footer