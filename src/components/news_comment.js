import React from 'react';
import axios from 'axios';
import {Card, Form, Input, Button, notification, BackTop} from 'antd';
const FormItem = Form.Item;
class Comment extends React.Component{
  state = {
    comments:[]
  }
  componentDidMount(){
    this.getList();
  }
  //获取列表
  getList = ()=>{
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.props.uniquekey}`;
    axios.get(url)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
  }
  submitTxt = () => {
    let userId = localStorage.getItem('userId');
    if(!userId){
      notification.success({
        message:'请登录！',
        description:''
      });
      return;
    }
    let {comment_content} = this.props.form.getFieldsValue();
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${userId}&uniquekey=${this.props.uniquekey}&commnet=${comment_content}`;
    axios.get(url)
      .then(res => {
        notification.success({
          message:'提交成功！',
          description:''
        });

        this.getList();
      });



  };
  //收藏新闻
  saveNews = () => {
    let userId = localStorage.getItem('userId');
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${userId}&uniquekey=${this.props.uniquekey}`;
    axios.get(url)
      .then(res => {
        notification.success({
          message:'收藏成功！',
          description:''
        })
      });



  }

  render(){
    const {comments} = this.state;
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
          {
            comments.map((item, index) =>{
              return  <Card key={index} title={item.UserName} extra={item.datetime}>
                          {item.Comments}
                      </Card>
            })
          }
        <Form onSubmit={this.submitTxt}>
          <FormItem  label="评论">
            {getFieldDecorator('comment_content')(
              <Input type='textarea'  placeholder="随便说点什么吧！！" />
            )}
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>提交评论</Button>&nbsp;&nbsp;&nbsp;
            <Button type='primary' onClick={this.saveNews}>收藏新闻</Button>
          </FormItem>

        </Form>
          <BackTop></BackTop>



      </div>


      )
  }




}
const NewsComment = Form.create()(Comment);
export default NewsComment;
