import React from 'react';
import NewsHeader from './newsHeader';
import NewsFoot from './newsFoot';
import '../css/react_news.css'
export default class App extends React.Component{

  render(){

    return(
      <div>
        <NewsHeader/>
        {this.props.children}

        <NewsFoot/>
      </div>



    )




  }





}