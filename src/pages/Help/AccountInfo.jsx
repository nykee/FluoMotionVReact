import React from 'react';
import {Row,Col} from 'antd'

class AccountInfo extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>用户名</Col>
                    <Col span={4}>admin</Col>
                </Row>
                <Row>
                    <Col span={4}>公司名称</Col>
                    <Col span={4}>匿名组织</Col>
                </Row>
                <Row>
                    <Col span={4}>免费处理次数</Col>
                    <Col span={4}>0</Col>
                </Row>
                <Row>
                    <Col span={4}>付费处理次数</Col>
                    <Col span={4}>0</Col>
                </Row>
                <Row>
                    <Col span={4}>总计处理次数</Col>
                    <Col span={4}>0</Col>
                </Row>
            </div>

        )
    }
}

export default AccountInfo;