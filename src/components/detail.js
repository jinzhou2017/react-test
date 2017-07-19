import React from 'react';
import axios from 'axios';
import {Row, Col, BackTop} from 'antd';
import NewsImageBlock from './news_image_block';
import NewsComment from './news_comment';
export default class Detail extends React.Component{
  state = {
    item:''
  };
  componentDidMount(){
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.params.uniquekey}`;
    axios.get(url)
      .then(res=>{

        this.setState({
          item:res.data.pagecontent
        })
      })
  };
  componentWillReceiveProps(newsprops){
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${newsprops.params.uniquekey}`;
    axios.get(url)
      .then(res=>{

        this.setState({
          item:res.data.pagecontent
        })
      })



  }


  render(){


    return(

      <Row>
        <Col span={1}/>
        <Col span={16}>
          <div dangerouslySetInnerHTML={{__html: this.state.item}}/>
          <hr className="bottom_line"/>
          <NewsComment uniquekey={this.props.params.uniquekey}></NewsComment>

        </Col>
        <Col span={6}>
          <NewsImageBlock count={40} type="top" card_width="100%" title="相关新闻" image_width="182px"/>

        </Col>
        <Col span={1}/>
        <BackTop/>

      </Row>
    )

  }



}
