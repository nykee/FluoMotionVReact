import React, { Component } from 'react';
import LeftNav from './components/LeftNav';
import NavBar from './components/NavBar'
import { Row, Col } from 'antd';
import {  Link } from 'react-router'
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
                </Col>
            </Row>
        </div>
    );
  }
}

export default App;
