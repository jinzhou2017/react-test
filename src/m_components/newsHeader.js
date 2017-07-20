import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
  Icon,
  Menu,
  Button,
  Modal,
  Tabs,
  Form,
  Input,
  message
} from 'antd';
import logo from '../image/logo.png';

const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class NewsHeader extends React.Component{
  state = {
    current:'top',
    username:'',
    visible:false
  }
  componentDidMount(){
    if(localStorage){
      let username = localStorage.getItem('username');
      this.setState({username});
    }
  }
  handleItem=(ev)=>{
    this.setState({
      current:ev.key
    })
  };
  handleTabs=()=>{
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  //注册、登录
  check=(isLogin)=>{
    let getv = this.props.form.getFieldsValue();
    if(isLogin){
      const {username, password} = getv;
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}`;
      axios.get(url)
        .then(res=>{
          if(res.data === null ){
            message.error('用户名或密码错误！')
          }else {
            this.setState({
              username: res.data.NickUserName
            })
            localStorage.setItem('username', res.data.NickUserName);
            localStorage.setItem('userId', res.data.UserId);
            this.props.form.resetFields();
          }

        })


    }else {
      const {r_username, r_password, r_d_password} = getv;
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${r_username}&r_password=${r_password}&r_confirmPassword=${r_d_password}`;
      axios.get(url)
        .then(res=>{

          if(res){
            message.success('注册成功！');
            this.props.form.resetFields();
          }


        })



    }

    this.setState({
      visible:false
    });


  };
  logout=()=>{
    this.setState({
      username:''
    });
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  };
  render(){
    const userItem = localStorage.getItem('username')
      ? <Link to='/mcenter'>
        <Icon type="inbox"/>
      </Link>
      : <Icon type="setting" onClick={this.handleTabs}/>;
    const { getFieldDecorator } = this.props.form;
    return(
     <div id="mobileheader">
       <header>
         <div>
           <Link to='/'>
             <img src={logo} alt="logo"/>
             <span>ReactNews2</span>
           </Link>
           {userItem}
         </div>
         <Modal
           title="用户中心"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="关闭"
         >
           <Tabs  type="card">
             <TabPane tab="登录" key="1">
               <div>
                 <FormItem  label="用户名">
                   {getFieldDecorator('username', {
                     rules: [{
                       required: true,
                       message: 'Please input your name',
                     }],
                   })(
                     <Input placeholder="请输入用户名" />
                   )}
                 </FormItem>
                 <FormItem  label="密码">
                   {getFieldDecorator('password')(
                     <Input type='password' placeholder="请输入密码" />
                   )}
                 </FormItem>
                 <FormItem >
                   <Button type="primary" htmlType="submit" onClick={this.check.bind(this, true)}>
                     登录
                   </Button>
                 </FormItem>
               </div>
             </TabPane>
             <TabPane tab="注册" key="2">
               <div>
                 <FormItem  label="用户名">
                   {getFieldDecorator('r_username')(
                     <Input placeholder="请输入用户名" />
                   )}
                 </FormItem>
                 <FormItem  label="密码">
                   {getFieldDecorator('r_password')(
                     <Input type='password' placeholder="请输入密码" />
                   )}
                 </FormItem>
                 <FormItem  label="确认密码">
                   {getFieldDecorator('r_d_password')(
                     <Input type='password' placeholder="请输入确认密码" />
                   )}
                 </FormItem>
                 <FormItem >
                   <Button type="primary" htmlType="submit" onClick={this.check.bind(this, false)}>
                     注册
                   </Button>
                 </FormItem>
               </div>

             </TabPane>

           </Tabs>

         </Modal>
       </header>




     </div>
      )
  }




}
export default Form.create()(NewsHeader);
