import React from 'react';

// import { Container } from './styles';

function MenuTree(props) {
  return (
    <li className='treeview'>
        <a href="">
            <i className={`fa fa-${props.icon}`}></i><span>{props.label}</span>
            <i className={`fa fa-angle-left pull-right`}></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
  );
}

export default MenuTree;