import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';
import {Link} from 'react-router'
import userAvatar from '../style/img/u-default.jpg'
import ep from '../state/eventProxy'


class NavBar extends React.Component {
    handleAccountClick(){
        ep.trigger('accountClick','sub4');
        ep.trigger('LeftMenuClick','9');
    }

    render()
    {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/help/accountInfo" onClick={this.handleAccountClick}>账户信息</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/logout">退出登录</Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <Row>
                <Col xs={2} sm={4} md={4} lg={6} xl={10}>
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

