import React from 'react';
import {  Card, Row, Col } from 'antd';
import CustomCardSum from './CustomCardSum'

class CustomCard extends React.Component {

    render() {
        let color='';
        if(this.props.titleName ==='收藏'){color ='#e4393c'}
        else if(this.props.titleName ==='任务'){color ='#6887FF'}
        else if(this.props.titleName ==='消息'){color ='#6CC788'}
        let colorStyle={
            color:color
        }

        return (
            <Card style={{marginTop:20}}>
                <Row>
                    <Col span={8}>
                        <i className={this.props.iconClass} style={colorStyle}></i>
                    </Col>
                    <Col span={16}>
                        <h3 style={{color:'#9B9B9B',fontSize:14}}>{this.props.titleName}</h3>
                        <CustomCardSum sum={this.props.sum}></CustomCardSum>
                    </Col>
                    
                </Row>
            </Card>


        )
    }
}

export default CustomCard;