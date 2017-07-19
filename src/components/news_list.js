import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';


export default class NewsList extends React.Component{

  state = {
    newsLists:[]
  }
  componentDidMount(){

    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`;
    axios.get(url)
      .then(res=>{
        this.setState({
          newsLists: res.data
        })


      })





  }

render(){
    let newsLists = this.state.newsLists;
    if(newsLists.length === 0){
      return <p>没有新闻！！</p>
    }else {

      return(

        <ul style={{fontSize:'14px'}}>
          {
            newsLists.map((item, index)=>{
              return <Link to={`/detail/${item.uniquekey}`} key={index}><li key={index}>{item.title}</li></Link>
            })
          }
      </ul>)


    }







}








}

