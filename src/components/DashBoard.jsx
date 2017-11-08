import React from 'react';
import { Row, Col, Card } from 'antd';

class DashBoard extends React.Component {
    render() {
        return (
            <Row>
                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                </Col>
                <Col span={12}></Col>
            </Row>

        )
    }
}

export default DashBoard;