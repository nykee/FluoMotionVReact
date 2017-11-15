import React from 'react';
import {Row,Col} from 'antd'

class AccountInfo extends React.Component {
    state={
        org:'匿名组织',
        uName:'admin',
        freeDealCount:0,
        paidDealCount:0,
        allDealCount:0
    };
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>用户名</Col>
                    <Col span={4}>{this.state.uName}</Col>
                </Row>
                <Row>
                    <Col span={4}>公司名称</Col>
                    <Col span={4}>{this.state.org}</Col>
                </Row>
                <Row>
                    <Col span={4}>免费处理次数</Col>
                    <Col span={4}>{this.state.freeDealCount}</Col>
                </Row>
                <Row>
                    <Col span={4}>付费处理次数</Col>
                    <Col span={4}>{this.state.paidDealCount}</Col>
                </Row>
                <Row>
                    <Col span={4}>总计处理次数</Col>
                    <Col span={4}>{this.state.allDealCount}</Col>
                </Row>
            </div>

        )
    }
}

export default AccountInfo;