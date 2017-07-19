import React from 'react';
import NewsHeader from './newsHeader';
import NewsFoot from './newsFoot';
import '../css/mobile_css.css';

export default class App_mobile extends React.Component{



  render(){

    return(
      <div>
        <NewsHeader/>
        {this.props.children}

        <NewsFoot/>
      </div>)
  }




}