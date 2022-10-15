import React from 'react';

// import { Container } from './styles';

function Tabs(props) {
  return (
    <div className="nav-tabs-custom">
        {props.children}
    </div>
  );
}

export default Tabs;