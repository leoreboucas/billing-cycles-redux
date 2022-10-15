import React from 'react';

// import { Container } from './styles';

function Input(props) {
  return (
    <input  {...props.input}
        className='form-control'
        type={props.type} 
        placeholder={props.placeholder} 
        readOnly={props.readOnly}
    />
  );
}

export default Input;