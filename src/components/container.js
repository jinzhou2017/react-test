import React from 'react';
import {Row, Col, Carousel, Tabs, Card} from 'antd';
import NewsList from './news_list';
import NewsImageBlock from './news_image_block';
//引入图片
import carousel_1 from '../image/carousel_1.jpg';
import carousel_2 from '../image/carousel_2.jpg';
import carousel_3 from '../image/carousel_3.jpg';
import carousel_4 from '../image/carousel_4.jpg';

const TabPane = Tabs.TabPane;
export default class Container extends React.Component{

  render(){

    return(
      <Row style={{padding:'20px 0'}}>
        <Col span={1}></Col>
        <Col span={22}>
          <div style={{overflow:'hidden'}}>
            <div style={{width:'35%', float:'left'}}>
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
              <NewsImageBlock image_width='33%' title="国际新闻" card_width='100%' type='guoji' count={6}/>
            </div>
            <Tabs defaultActiveKey="1" style={{width:'35%', float:'left', margin:'0 10px'}}>
              <TabPane tab="头条新闻" key="1">
                <Card >
                  <NewsList type="top" count={25}/>
                </Card>
              </TabPane>
              <TabPane tab="国际新闻" key="2">
                <Card >
                  <NewsList type="guoji" count={25}/>
                </Card>
              </TabPane>
            </Tabs>
            <Tabs>
              <TabPane tab="友情链接" key="1">
                <Card style={{}} className="card">

                  <div style={{width: '450px'}}>
                    <div className="pro pro_bg" style={{fontSize: '12px'}}>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                    </div>
                    <div className="pro">
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a><br/>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                    </div>
                    <div className="pro pro_bg">
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                      <a href="http://yuehui.163.com/?from=wscp">
                        同城约会</a>
                      <a href="http://sports.qq.com/">
                        腾讯体育</a>
                      <a href="https://www.zhibo8.cc/">
                        直播吧</a>
                      <a href="https://www.zhibo8.cc/zuqiu/">
                        足球直播</a>
                    </div>
                  </div>


                </Card>


              </TabPane>


            </Tabs>
          </div>
          <NewsImageBlock image_width='10%' title="国际新闻" card_width='100%' type='guonei' count={20}/>
          <NewsImageBlock image_width='10%' title="娱乐新闻" card_width='100%' type='yule' count={20}/>




        </Col>
        <Col span={1}></Col>





      </Row>






    )




  }





}
