import React from 'react';
import { Menu, Icon ,Row, Col,Button} from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftNav extends React.Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        collapsed: false,
        openKeys: ['sub1'],
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    handleIndexClick = ()=>{
        this.setState({
            openKeys:['']
        })
    }

    render() {
        return (
                //style={{ width: '100%' }}


                        <div  style={{height:'100%',background:'#333'}}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={[]}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                                onOpenChange={this.onOpenChange}
                                openKeys={this.state.openKeys}
                            >

                                <Menu.Item key="1" >
                                    <Icon type="desktop"  onClick={this.handleIndexClick}/>
                                    <span  onClick={this.handleIndexClick}>首页</span>
                                </Menu.Item>

                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
                                    <Menu.Item key="5">数据查看</Menu.Item>
                                    <Menu.Item key="6">统计查询</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="mail" /><span>数据上传</span></span>}>
                                    <Menu.Item key="7">单个文件上传</Menu.Item>
                                    <Menu.Item key="8">批量上传</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>帮助</span></span>}>
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>
                        </div>







        );
    }

}

export default LeftNav;