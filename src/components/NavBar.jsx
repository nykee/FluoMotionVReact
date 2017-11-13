import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';
import {Link} from 'react-router'
import userAvatar from '../style/img/u-default.jpg'

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/accountInfo">账户信息</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/logout">退出登录</Link>
        </Menu.Item>
    </Menu>
);
class NavBar extends React.Component {
    render()
    {
        return (
            <Row>
                <Col span={4}>
                    <h3>FluoMotion数字影像分析平台</h3>
                </Col>
                <Col span={3} offset={21}>
                    <span>Admin</span>
                    <Dropdown overlay={menu}>
                        <Avatar src={userAvatar} />
                    </Dropdown>
                </Col>
            </Row>

        )
    }
}





export default NavBar;

