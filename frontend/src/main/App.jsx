import '../common/template/dependencies'
import React from 'react';
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';

function App(props) {
  return (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          {props.children}
        </div>
        <Footer />
    </div>
  );
}

export default App;