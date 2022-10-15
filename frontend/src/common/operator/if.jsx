import React from 'react';

// import { Container } from './styles';

function If(props) {
  if(props.test) {
    return props.children
  } else {
    return false
  }
}

export default If;