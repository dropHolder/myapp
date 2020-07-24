import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';




class Main extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Portfolio />
        <Footer />
      </div >
    );
  }

}

export default Main;
