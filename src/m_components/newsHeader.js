import React from 'react';
import {Form} from 'antd';
import {Link} from 'react-router';
import logo from '../image/logo.png';
export default class NewsHeader extends React.Component{

  render(){
    const userItem = username
      ? <Link to='/usercenter'>
        <Icon type="inbox"/>
      </Link>
      : <Icon type="setting" onClick={this.setModalVisible.bind(this, true)}/>
    return(
     <div id="mobileheader">
       <header>
         <div>
           <Link to='/'>
             <img src={logo} alt="logo"/>
             <span>ReactNews2</span>
           </Link>
           {userItem}
         </div>
       </header>




     </div>
      )
  }




}
