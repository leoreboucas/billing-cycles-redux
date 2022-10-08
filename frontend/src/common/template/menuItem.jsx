import React from 'react';

// import { Container } from './styles';

function MenuItem(props) {
  return (
    <li> 
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </a>
    </li>
  );
}

export default MenuItem;