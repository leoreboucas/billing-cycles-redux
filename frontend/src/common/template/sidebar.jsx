import React from 'react';
import Menu from './menu';

// import { Container } from './styles';

function Sidebar() {
  return (
    <aside className='main-sidebar'>
        <section className='sidebar'>
            <Menu />
        </section>
    </aside>
  );
}

export default Sidebar;