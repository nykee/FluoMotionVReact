import React from 'react';
import { Row, Col } from 'antd';
import CustomCard from './CustomCard'
import CustomActivityCard from './CustomActivityCard'
import CustomMessageCard from './CustomMessageCard'

class DashBoard extends React.Component {



    render() {

        let activity=[
            {name:'删除病例--张三丰',timetag:'2017-9-30 17:30'},
            {name:'删除病例--张三丰2',timetag:'2017-9-29 17:30'},
            {name:'删除病例--张三丰3',timetag:'2017-9-28 17:30'},
            {name:'删除病例--张三丰4',timetag:'2017-9-27 17:30'},
            {name:'删除病例--张三丰5',timetag:'2017-9-26 17:30'},
        ];
        let message =[
            {name:'病例数据--张三丰--处理完成',timetag:'2017-6-30 17:30'},
            {name:'病例数据--张三丰1--处理完成',timetag:'2017-6-29 17:30'},
            {name:'病例数据--张三丰2--处理完成',timetag:'2017-6-28 17:30'},
            {name:'病例数据--张三丰3--处理完成',timetag:'2017-6-27 17:30'},
            {name:'病例数据--张三丰4--处理完成',timetag:'2017-6-26 17:30'},
        ];
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Row gutter={10}>
                            <Col span={12}>

                                <CustomCard ref="card1" iconClass="fa fa-heart fa-2x" titleName="收藏" sum="120"></CustomCard>
                                <CustomCard  ref="card1" iconClass="fa fa-tasks fa-2x" titleName="任务" sum="200"></CustomCard>

                            </Col>
                            <Col span={12}>
                                <CustomCard ref="card1" iconClass="fa fa-envelope fa-2x" titleName="消息" sum="220"></CustomCard>
                                <CustomCard   ref="card1" iconClass="fa fa-cloud fa-2x" titleName="数据" sum="320"></CustomCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        echarts
                    </Col>
                </Row>
                <Row style={{marginTop:20}}>
                    <Col span={8}>
                        <CustomActivityCard ref="activityCard" activity={activity} title="动态"></CustomActivityCard>

                    </Col>
                    <Col span={8}>
                        <CustomMessageCard ref="messageCard" message={message} title="通知"></CustomMessageCard>

                    </Col>
                    <Col span={8}>

                        <CustomActivityCard ref="activityCard" activity={activity} title="动态"></CustomActivityCard>
                    </Col>
                </Row>
            </div>


        )
    }
}

export default DashBoard;