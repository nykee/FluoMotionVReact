import React from 'react';
import {Col, Row, Card} from 'antd'
import CommonCardHeader from './CommonCardHeader'
import CommonCardFooter from './CommonCardFooter'

class CustomActivityCard extends React.Component {



    render() {
        let cardContentItems = [];
        for(let act of this.props.activity){
            cardContentItems.push(
                <Row>
                    <Col span={4}><i className="fa fa-dot-circle-o fa-lg"></i></Col>
                    <Col span={12}>{act.name}</Col>
                    <Col span={8}><b className="time-tag">{act.timetag}</b></Col>
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

export default CustomActivityCard;