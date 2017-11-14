import React, { Component } from 'react';
import LeftNav from './components/LeftNav';
import NavBar from './components/NavBar'
import BreadCrumb from './components/BreadCrumb'
import { Row, Col } from 'antd';
import './App.css';
import innoLogo from './style/img/inno1.png'

class App extends Component {
  render() {
      let windHeight =window.innerHeight;
      let leftNStyle={
          height:windHeight
      };
    return (
        <div className="App">
            <Row gutter={20}>
                {/*左侧导航*/}
                <Col span={4} style={leftNStyle}><LeftNav></LeftNav></Col>
                {/*右侧主界面*/}
                <Col span={20}>
                    {/*上方导航*/}
                    <Row>
                        <Col span={24}>
                            <NavBar></NavBar>
                        </Col>
                    </Row>
                    <Row type="flex" justify="left">
                        <Col xs={2} sm={4} md={4} lg={4} xl={10}>
                            <BreadCrumb></BreadCrumb>
                        </Col>
                    </Row>
                    <Row >

                        {/*路由显示区*/}
                        {this.props.children}
                    </Row>
                    <Row style={{marginTop:'1rem'}}>
                        {/*公司logo*/}
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <img src={innoLogo} alt="" />
                            </Col>
                        </Row>
                        {/*cpright*/}
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <span>Copyright &copy; 2012-2017 Shanghai Innomotion Medical Inc. All Rights Reserved</span>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
}

export default App;
