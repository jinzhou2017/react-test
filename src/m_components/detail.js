import React from 'react';
import axios from 'axios';
import NewsComments from '../components/news_comment';
export default class Detail_mobile extends React.Component{
    state = {
      items:''
    };
    componentDidMount(){
      const {uniquekey} = this.props.params;
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`;
      axios.get(url)
        .then(res => {
          this.setState({
            items: res.data
          });
        })




    }


  render(){
      const {items} = this.state;
      let newsDetail = !items
      ? '没有获取到新闻详情'
      : <div dangerouslySetInnerHTML={{__html: items.pagecontent}}>

        </div>;

    return(
        <div>
          {newsDetail}
          <hr/>
          <NewsComments uniquekey={this.props.params.uniqueKey}/>
        </div>

    )
  }




}

