import React from 'react';
import {Col, Row, Card} from 'antd';
import CommonCardHeader from './CommonCardHeader'
import CommonCardFooter from './CommonCardFooter'

class CustomMessageCard extends React.Component {
    render() {
        let cardContentItems = [];
        for(let mes of this.props.message){
            cardContentItems.push(
                <Row>
                    <Col span={4}><i className="fa fa-dot-circle-o fa-lg"></i></Col>
                    <Col span={12}>{mes.name}</Col>
                    <Col span={8}><b className="time-tag">{mes.timetag}</b></Col>
                </Row>
            )


        }
        return (
            <Card  style={{ width: 300 }}>
                <CommonCardHeader title={this.props.title}></CommonCardHeader>
                <div className="card-content" >

                    {cardContentItems}

                </div>
                <CommonCardFooter></CommonCardFooter>
            </Card>

        )
    }
}

export default CustomMessageCard;