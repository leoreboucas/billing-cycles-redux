import React from 'react';

// import { Container } from './styles';

function TabsHeader(props) {
  return (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
  );
}

export default TabsHeader;