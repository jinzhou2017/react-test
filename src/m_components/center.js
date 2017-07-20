import React from 'react';
import { Tabs, Radio, Upload, Icon, Modal } from 'antd';
import axios from 'axios';
import { Card } from 'antd';
const TabPane = Tabs.TabPane;

export default class Center_mobile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      sL:[],
      cL:[],
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    };
  }
  componentDidMount(){
    let userId = localStorage.getItem('userId');
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userId}`;
    axios.get(url)
      .then(res => {
        this.setState({
          sL: res.data
        })
      });
     url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userId}`;
    axios.get(url)
      .then(res => {
        this.setState({
          cL: res.data
        })
      })





  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });



  render(){
    const { mode, cL, sL } = this.state;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return(

      <div>
        <Tabs
          defaultActiveKey="1"
        >
          <TabPane tab="我的收藏列表" key="1">
            {
              sL.map((item, index) => {
                return(
                  <Card title={item.uniqueKey} key={index}>
                    {item.Title}
                  </Card>
                )
              })
            }

          </TabPane>
          <TabPane tab="我的评论列表" key="2">
            {
              cL.map((item, index) => {
                return(
                  <Card title={`于${item.datetime}评论`} key={index}>
                    {item.Comments}
                  </Card>
                )
              })
            }
          </TabPane>
          <TabPane tab="头像设置" key="3">
            <div className="clearfix">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {uploadButton}

              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </TabPane>

        </Tabs>
    </div>)
  }




}
