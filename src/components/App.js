import React from 'react';
import NewsHeader from './newsHeader';
import '../css/index.css';
export default class App extends React.Component{

  render(){

    return(
      <div>
        <NewsHeader/>
        {this.props.children}

        <p>底部</p>
      </div>



    )




  }





}