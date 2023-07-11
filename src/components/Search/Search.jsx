import React, { Component } from 'react'
import './Search.scss'

class Search extends Component {

    state={input:''}
  
    handleChange =(e)=>{
        this.setState({input: e.target.value});
        this.props.filter(e.target.value);
    }

render() {
    return (
      <div className='search'>
            <input type="search" onChange={this.handleChange} value={this.state.input}/>
            <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    )
  }
}

export default Search