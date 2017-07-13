import React from 'react';
export default class Search extends React.Component{
  getName=()=>{
    let username = this.refs.username.value;
    this.props.getName(username);
    this.refs.username.value = '';
  }

  render(){


    return(

      <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" ref='username'/>
        <button onClick={this.getName}>Search</button>
      </div>
    </section>)



  }






}
