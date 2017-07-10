import React, {Component} from 'react';
export default class List extends Component{
    constructor(props){
      super(props);
    }
  removeList=(event)=>{
      if (window.confirm("删除后不可恢复！！！")){
        let index = event.target.index;
        this.props.removeList(index);
      }

  }
  render(){
    if(this.props.user.length ==0){
      return <h2 style={{display: 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
    }else {
      return(

        <div className="col-md-8">
          <h3 className="reply">评论回复：</h3>

          <ul className="list-group">
            {
              this.props.user.map((item, index)=> {

                return (
                    <li className="list-group-item" key={index}>
                      <div className="handle">
                        <a href="javascript:;"  index={index} onClick={this.removeList}>删除</a>
                      </div>
                      <p className="user"><span >{item.username}</span><span>说:</span></p>
                      <p className="centence">{item.content}</p>
                    </li>
                )
              })


            }
          </ul>
        </div>);



    }




  }



}
