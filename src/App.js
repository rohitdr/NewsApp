import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import Loader from './Components/Loader';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News page_size={5}/>
  
      </div>
    )
  }
}



