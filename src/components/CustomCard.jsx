import React from 'react';
import {  Card, Row, Col } from 'antd';

class CustomCard extends React.Component {

    render() {
        return (
            <Card>
                <Row>
                    <Col span={8}>
                        <i className={this.props.iconClass}></i>
                    </Col>
                    <Col span={16}>
                        <h3>{this.props.titleName}</h3>
                        <span>{this.props.sum}</span>
                    </Col>
                    
                </Row>
            </Card>


        )
    }
}

export default CustomCard;