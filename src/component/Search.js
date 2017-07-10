import React, {Component} from 'react';
export default class Search extends Component{
  searchname=()=>{
    let name = this.refs.name.value.trim();
    if(!name){
      alert('请输入搜索信息！');
      return;
    }
    this.props.searchname(name);
    this.refs.name.value = '';

  }

  render(){
    return(<section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" ref='name'/>
        <button onClick={this.searchname}>Search</button>
      </div>
    </section>)
  }




}
