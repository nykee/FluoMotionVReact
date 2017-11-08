import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="">3rd menu item</a>
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
                        <Avatar src='../style/img/u-default.jpg' />
                    </Dropdown>
                </Col>
            </Row>

        )
    }
}





export default NavBar;

/*
* import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>
, mountNode);*/