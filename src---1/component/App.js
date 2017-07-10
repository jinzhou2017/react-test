import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:[
        {
          username:'sunwukong',
          content:'hello world!'
        },
        {
          username:'zhubajie',
          content:'good evening!'
        }

      ]
    }
  }
  itemList=(list) => {
    this.state.user.unshift(list);
    this.setState({user:this.state.user});


  };
  removeList=(index) =>{
    this.state.user.splice(index, 1);
    this.setState({user:this.state.user});

  };


  render() {
    return (

      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add itemList = {this.itemList}/>
          <List user = {this.state.user} removeList = {this.removeList}/>
        </div>
      </div>

    );
  }
}

export default App;
