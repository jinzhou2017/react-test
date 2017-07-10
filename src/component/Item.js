import React, {Component} from 'react';
import axios from 'axios';
export default class Item extends Component{
  constructor(props){
    super(props);
    this.state = {
      first:true,
      second:false,
      items:'',
      error:''
    }
  }
  componentWillReceiveProps(newprop){
    this.setState({
      first:false,
      second:true
    });
    let {successUrl} = newprop.chang;

    axios.get(successUrl).then(res => {
        let items = res.data.items.map((item)=>{
          return {
            html_url:item.html_url,
            avatar_url:item.avatar_url,
            login: item.login
          }
        });
        console.log(items);
        this.setState({items,first:false,
          second:false});
      })
      .catch(error => {
        console.log(error);
      })



  }

  render(){


    if(this.state.first){
      return <h2>请输入搜索的Git用户名~~~</h2>
    }else if(this.state.second){
      return <h2>loading...</h2>
    }else {
      return(
        <div>
          {
            this.state.items.map((item, index)=>{
              return(
                <div className="card" key={index}>
                  <a href={item.html_url} target="_blank">
                    <img src={item.avatar_url} style={{width:'100px'}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
                )
            })
          }




        </div>)


    }
  }



}
