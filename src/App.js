import Navbar from './components/Navbar/Navbar'
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './helper/data';

import React, { Component } from 'react'

 class App extends Component {

  state={signs:data};

  filterSigns = (text)=>{
    console.log(text);
    if(text!==''){
      text = text.toLowerCase();
      let signs = data;
      let filteredSigns = signs.filter((sign)=> sign.title.toLowerCase().includes(text) || sign.date.toLowerCase().includes(text)) 
      this.setState({signs:filteredSigns})  
    }else{
      this.setState({signs:data});
    }
  }

  render() {
    return (
      <div className='App'>
      <Navbar filter={this.filterSigns}/>
      <Header/>
      <Main signs={this.state.signs}/>
    </div>
    )
  }
}

export default App

