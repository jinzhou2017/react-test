import React from 'react';
import { Card } from 'antd';
import axios from 'axios';
import {Link} from 'react-router';
export default class MNewsList extends React.Component{
  state = {
    items:[]
  };
  componentDidMount(){
    const {type, count} = this.props;
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
    axios.get(url)
      .then(res => {
        this.setState({
          items: res.data
        })
      })
  }

  render(){
    const {items} = this.state;
    let itemList = items.length === 0
      ? '没有请求到新闻！'
      : items.map((item, index) => {
          return(
          <Link to={`/mdetail/${item.uniquekey}`} key={index}>
            <Card >
              <div className="newsList"><img src={item.thumbnail_pic_s} alt=""/></div>
              <p style={{display:'inline-block'}}>{item.title}</p>
            </Card>
          </Link>

          )
      });
    return(
      <div>
        {itemList}
    </div>)
  }




}
