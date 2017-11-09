import React from 'react';
import { Row, Col, Card } from 'antd';

class DashBoard extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>
                                <Card   style={{ width: 300 }}>
                                    <Row>
                                        <Col span={8}>
                                            <i className="fa fa-heart fa-2x"></i>
                                        </Col>
                                        <Col span={16}>
                                            <h4></h4>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                                <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        echarts
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </Col>
                    <Col span={8}>
                        <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </Col>
                    <Col span={8}>
                        <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </Col>
                </Row>
            </div>


        )
    }
}

export default DashBoard;