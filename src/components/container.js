import React from 'react';
import {Link} from 'react-router';
export default class Container extends React.Component{

  render(){

    return(
      <div>
        <Link to="/detail">新闻细节</Link>
        <Link to="/center">新闻详情</Link>
      </div>



    )




  }





}
