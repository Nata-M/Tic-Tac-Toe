import React from 'react';
import './Form.css';

const FormItem = (props) => {
  const { text, onChange } = props;
  return (
    <form className='FormItem'>
      <span className='Text'><p>{text}</p></span>
      <input onClick={onChange} type="radio" name="col" value="3"></input>
      <label>3</label>
      <input onClick={onChange} type="radio" name="col" value="4"></input>
      <label>4</label>
      <input onClick={onChange} type="radio" name="col" value="5"></input>
      <label>5</label>
      <input onClick={onChange} type="radio" name="col" value="6"></input>
      <label>6</label>
      <input onClick={onChange} type="radio" name="col" value="7"></input>
      <label>7</label>
      <input onClick={onChange} type="radio" name="col" value="8"></input>
      <label>8</label>
    </form>
  )
}

export default FormItem