import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import {Link} from 'react-router';
export default class NewsImageBlock extends React.Component{
  state = {
    itemsArr:[]
  }
  componentDidMount(){
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`;
    axios.get(url)
      .then(res=>{

        this.setState({
          itemsArr: res.data
        })

      })
  }



  render(){
    const {itemsArr} = this.state;
    return(
      <div>
        <Card title={this.props.title} style={{ width: this.props.card_width}}>
          {
            itemsArr.map((item, index)=>{
              return(
              <Link to={`/detail/${item.uniquekey}`} key={item.uniquekey}>
                <div  style={{float:'left', width:this.props.image_width, height:'170px'}}>
                <img src={item.thumbnail_pic_s} alt="" style={{width:'96%'}}/>
                <p style={{width:'96%',overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{item.title}</p>
                <p>{item.author_name}</p>
              </div>
              </Link>)


            })
          }
        </Card>
      </div>
      )
  }
}
