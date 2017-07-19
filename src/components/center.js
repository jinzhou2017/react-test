import React from 'react';
import {Tabs, Card, Upload, Icon, Modal} from 'antd';
import axios from 'axios';
const TabPane = Tabs.TabPane;
export default class Center extends React.Component {
    state = {
      saveList:[],
      comments:[],
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
    componentDidMount(){
      let userId = localStorage.getItem('userId');
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userId}`;
      axios.get(url)
        .then(res => {
          this.setState({
            saveList: res.data
          })
        });
      url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userId}`;
      axios.get(url)
        .then(res => {
          this.setState({
            comments: res.data
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


  render() {
      const {saveList, comments} = this.state;
      const sL = saveList.length === 0
      ? '没有任何收藏！'
      :saveList.map((item, index) => {
         return <Card title={item.uniquekey} key={index} extra={item.UserId}>

                 <p style={{display:'inline-block'}}>{item.Title}</p>
                <a href={`#/detail/${item.uniquekey}`} style={{float:'right'}}>查看</a>
               </Card>
        });
      const cL = comments.length === 0
      ? '没有任何收藏！'
      :comments.map((item, index) => {
        return <Card title={`于${item.datetime}评论`} key={index} >

          <p>{item.Comments}</p>
        </Card>
      });
      const { previewVisible, previewImage, fileList } = this.state;
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );

    return (
      <div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="收藏列表" key="1">{sL}</TabPane>
          <TabPane tab="评论列表" key="2">{cL}</TabPane>
          <TabPane tab="头像设置" key="3">
            <div className="clearfix">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 3 ? null : uploadButton}
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