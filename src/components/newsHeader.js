import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
  Row,
  Col,
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
class Header extends React.Component{
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

      let isUsername = this.state.username?(
        <MenuItem key="register" className="header-r">&nbsp;
          <Button type='primary'>{this.state.username} </Button>&nbsp;
          <Link to="/center" style={{display:'inline-block'}}><Button type='dashed'>个人中心</Button></Link>&nbsp;
          <Button onClick={this.logout}>退出</Button>
        </MenuItem>
      ):(
        <MenuItem key="register" className="header-r" >
         <span onClick={this.handleTabs}><Icon type="star"/>登录/注册</span>
        </MenuItem>
      );
      const { getFieldDecorator } = this.props.form;



    return(
      <header>
        <Row >
          <Col span={1}>
          </Col>
          <Col span={3} >
            <a href="#/" className='logo'>
              <img src={logo} alt=""/>
              <span>News2</span>
            </a>



          </Col>
          <Col span={19}>
            <Menu mode='horizontal' onClick={this.handleItem} selectedKeys={[this.state.current]}>
              <MenuItem key="top">
                <Icon type="star"/>头条
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="star"/>社会
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="star"/>国内
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="star"/>国际
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="star"/>娱乐
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="star"/>体育
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="star"/>科技
              </MenuItem>
              <MenuItem key="shishang" >
                <Icon type="star"/>时尚
              </MenuItem>
              {isUsername}

            </Menu>

          </Col>
          <Col span={1}>

          </Col>


        </Row>
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

      </header>)


  }





}

const NewsHeader = Form.create()(Header);
export default NewsHeader;
