import React from 'react';
import { Tabs, Radio, Carousel } from 'antd';
import MNewsList from './m_news_list';
import carousel_1 from '../image/carousel_1.jpg';
import carousel_2 from '../image/carousel_2.jpg';
import carousel_3 from '../image/carousel_3.jpg';
import carousel_4 from '../image/carousel_4.jpg';
const TabPane = Tabs.TabPane;

export default class Container_mobile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }


  render(){
    const { mode } = this.state;
    return(
      <div>

        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
        >
          <TabPane tab="头条" key="1">
                  <div className="lunbotu">
                    <Carousel autoplay >
                      <div>
                        <img style={{width:'100%'}} src={carousel_1} alt=""/>
                      </div>
                      <div>
                        <img style={{width:'100%'}} src={carousel_2} alt=""/>
                      </div>
                      <div>
                        <img style={{width:'100%'}} src={carousel_3} alt=""/>
                      </div>
                      <div>
                        <img style={{width:'100%'}} src={carousel_4} alt=""/>
                      </div>
                    </Carousel>
                  </div>

            <MNewsList type="top" count={10}/>
          </TabPane>
          <TabPane tab="社会" key="2">
            <MNewsList type="shehui" count={10}/>
          </TabPane>
          <TabPane tab="国际" key="3">
            <MNewsList type="guoji" count={10}/>
          </TabPane>
          <TabPane tab="国内" key="4">
            <MNewsList type="guonei" count={10}/>
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MNewsList type="yule" count={10}/>
          </TabPane>

        </Tabs>
      </div>)
  }




}
