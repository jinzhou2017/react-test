import React, {Component} from 'react';
export default class List extends Component{
  constructor(props){
    super(props);
  }
  add = () => {
    let username = this.refs.username.value.trim();
    let content = this.refs.content.value.trim();
    if(!username || !content){
      alert('请输入用户名和文本！');
      return;
    }
    let user = {username, content};
    this.props.itemList(user);
    this.refs.username.value = '';
    this.refs.content.value = '';

  }
  render(){

    return(


        <div className="col-md-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label>用户名</label>
              <input type="text" className="form-control" placeholder="用户名" ref='username'/>
            </div>
            <div className="form-group">
              <label>评论内容</label>
              <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
              </div>
            </div>
          </form>
        </div>

     );


  }



}
