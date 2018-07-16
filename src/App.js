import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer/Footer';
import Suscribe from './Suscribe/Suscribe';
import TweeterCards from './TweeterCards/TweeterCards';
class App extends Component {

  
  render() {
    return (
      <div className="App">
         <section><TweeterCards/></section> 

          <section><Suscribe/></section>

          <section><Footer/></section> 
          
      </div>
    );
  }
}

export default App;
