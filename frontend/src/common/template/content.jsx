import React from 'react';

// import { Container } from './styles';

function Content(props) {
  return (
    <section className='content'>{props.children}</section>
  );
}

export default Content;