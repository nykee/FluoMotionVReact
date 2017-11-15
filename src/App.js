import React, { Component } from 'react';
import LeftNav from './components/LeftNav';
import NavBar from './components/NavBar'
import BreadCrumb from './components/BreadCrumb'
import { Row, Col } from 'antd';
import './App.css';
import innoLogo from './style/img/nykee.png'


class App extends Component {
  render() {
      let windHeight =window.innerHeight;
      let leftNStyle={
          height:windHeight
      };
    return (
        <div className="App">
            <Row >
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
                    <Row type="flex" justify="left" style={{backgroundColor:'#ECECEC',paddingTop:'1rem',paddingLeft:'1rem'}}>

                            <BreadCrumb></BreadCrumb>

                    </Row>
                    <Row style={{backgroundColor:'#ECECEC',paddingTop:'0.8rem',paddingLeft:'1rem',paddingBottom:'0.4rem'}}>

                        {/*路由显示区*/}
                        {this.props.children}
                    </Row>
                    <Row style={{marginTop:'1rem'}}>
                        {/*公司logo*/}
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <img src={innoLogo} alt=""  style={{width:150,height:50}}/>
                            </Col>
                        </Row>
                        {/*cpright*/}
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <span>Copyright &copy; 2017-now nykee All Rights Reserved</span>
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
