import React, {Component} from 'react';
import axios from 'axios';
import Item from './Item';
import Rearch from './Search';
import './index.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {

      successUrl:''
    }

  }
  searchname=(name)=>{
    let successUrl = `https://api.github.com/search/users?q=${name}`;
    this.setState({successUrl});


  };

  
  render(){
    return (<div className="container">
      <Rearch searchname = {this.searchname}/>

      <div className="row">
        <Item chang={this.state}/>


      </div>
    </div>)
    
    
    
    
    
  }
  
  
  
  
  
}