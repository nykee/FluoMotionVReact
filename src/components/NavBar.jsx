import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';
import userAvatar from '../style/img/u-default.jpg'

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">账户信息</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">退出登录</a>
        </Menu.Item>
    </Menu>
);
class NavBar extends React.Component {
    render()
    {
        return (
            <Row>
                <Col span={6}>
                    <h4>FluoMotion数字影像分析平台</h4>
                </Col>
                <Col span={6} offset={12}>
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

