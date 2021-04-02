import React from 'react';
import './Form.css';
import FormItem from './FormItem';

const Form = (props) => {
  const { onChange } = props;

  return (
    <div className='Form'>
      <h2>Board Size</h2>
      <FormItem onChange={onChange} text='Board size' />
      <FormItem onChange={onChange} text='Win' />
    </div>
  )
}

export default Form