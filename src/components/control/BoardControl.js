import React from 'react';
import './BoardControl.css';
import Form from './form/Form';
import Footer from './footer/Footer';

function BoardControl(props) {
  const { onChange, open, click } = props;

  return (
    <div open={open} id='control' className={open ? 'BoardControl' : 'none'} >
      <Form onChange={onChange} />
      <Footer click={click} />
    </ div>
  )
}

export default BoardControl