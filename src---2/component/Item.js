import React from 'react';
import axios from 'axios';
export default class Item extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        first:true,
        second:false,
        items:'',
        error:''
      }
    }
  componentWillReceiveProps(newprops){
    this.setState({first:false, second:true});
      let url = newprops.url;
      axios.get(url)
        .then((data)=>{
          let items = data.data.items.map((item)=>{
            return {
              avatar_url:item.avatar_url,
              login:item.login,
              html_url:item.html_url

            }


          })
          this.setState({items, first:false, second:false});


        })
        .catch((error)=>{
          this.setState({error, first:false, second:false});



        })







  }


  render(){
      if(this.state.first){

        return <h2 style={{color:'yellow'}}>请输入搜索的Git的用户名~~~~</h2>

      }else if(this.state.second){

        return <h2>Loading...</h2>
      }else if(this.state.error){
        return <h2 style={{color:'red'}}>网址错误！！</h2>
      }else {
        return(
          <div className="row" >
          {
            this.state.items.map((item, index)=>{
            return(

              <div className="card" key={index}>
                <a href={item.html_url} target="_blank">
                  <img src={item.avatar_url} style={{width:'100px'}} alt="gitHub"/>
                </a>
                <p className="card-text">item.login</p>
              </div>
            )

          })
          }

          </div>
          )




      }





  }




}
