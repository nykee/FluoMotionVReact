import React, { Component } from 'react';
import LeftNav from './components/LeftNav';
import NavBar from './components/NavBar'
import { Row, Col } from 'antd';
import './App.css';

class App extends Component {
  render() {
      let windHeight =window.innerHeight;
      let leftNStyle={
          height:windHeight
      };
    return (
        <div className="App">
            <Row gutter={20}>
                <Col span={4} style={leftNStyle}><LeftNav></LeftNav></Col>
                <Col span={20}>
                    <Row>
                        <Col span={24}>
                            <NavBar></NavBar>
                        </Col>

                    </Row>
                    <Row>

                        {this.props.children}
                    </Row>
                    <Row>
                        <Row type="flex" justify="center">
                            <Col>
                            <img src="./style/img/inno1.png" alt=""/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col>
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
