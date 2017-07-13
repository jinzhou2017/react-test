import React from 'react';
import './index.css';
import Search from './Search';
import Item from './Item';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:''
    }
  }
  getName=(name)=>{
    this.setState({
      url:`https://api.github.com/search/users?q=${name}`
    })



  }


  render(){
    
    return(<div className="container">
      <Search getName={this.getName}/>
      <Item url={this.state.url}/>

    </div>)
    
    
    
    
  }
  
  
  
  
  
  
  
  
}
