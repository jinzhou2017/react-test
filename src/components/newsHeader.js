import React from 'react';
import {
  Row,
  Col,
  Icon,
  Menu,
  Button,
  Modal,
  Tabs,
  Form,
  Input
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
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render(){

      let isUsername = this.state.username?(
        <MenuItem key="register" className="header-r">&nbsp;
          <Button type='primary'>{this.state.username} </Button>&nbsp;
          <Button type='dashed'>个人中心</Button>&nbsp;
          <Button >退出</Button>
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
                  <Button type="primary" onClick={this.check}>
                    登录
                  </Button>
                </FormItem>
              </div>
            </TabPane>
            <TabPane tab="注册" key="2">
              <div>
                <FormItem  label="用户名">
                  {getFieldDecorator('r-username')(
                    <Input placeholder="请输入用户名" />
                  )}
                </FormItem>
                <FormItem  label="密码">
                  {getFieldDecorator('r-password')(
                    <Input type='password' placeholder="请输入密码" />
                  )}
                </FormItem>
                <FormItem  label="确认密码">
                  {getFieldDecorator('r-password')(
                    <Input type='password' placeholder="请输入确认密码" />
                  )}
                </FormItem>
                <FormItem >
                  <Button type="primary" onClick={this.check}>
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
