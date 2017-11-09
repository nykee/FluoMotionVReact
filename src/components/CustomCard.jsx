import React from 'react';
import {  Card, Row, Col } from 'antd';

class CustomCard extends React.Component {

    render() {
        return (
            <Card>
                <Row>
                    <Col span={8}>
                        <i className="fa fa-heart fa-2x"></i>
                    </Col>
                    <Col span={16}>
                        <h3></h3>
                    </Col>
                    
                </Row>
            </Card>


        )
    }
}

export default CustomCard;