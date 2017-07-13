import React from 'react';
import {
  Row,
  Col,
  Icon
} from 'antd';
import logo from '../image/logo.png';
class NewsHeader extends React.Component{


  render(){


    return(
      <header>
        <Row >

          <Col span={1}>

          </Col>
          <Col span={3} >
            <a href="#/" className='logo'>
              <img src={logo} alt=""/>
              <span>新闻首页！</span>
            </a>

          </Col>
          <Col span={19}>

          </Col>
          <Col span={1}>

          </Col>

        </Row>


      </header>)


  }





}


export default NewsHeader;
