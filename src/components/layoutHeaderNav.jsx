import React, { Component, useState } from 'react';
import '../App.css';
import { Layout, Menu, Dropdown, Card } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
// 还可以使用withRouter   高阶组件   来给组件添加路由方式
import NetworkDisk from '../components/networkDisk';
import TabShare from '../pages/tabShare/index';
import AMomentCamera from '../pages/AMomentCamera';
const { Header } = Layout;
import Fint from '../404';
CaretDownOutlined;
const more = [
    {
        name: '更多',
    },
    {
        name: '垃圾文件清理',
    },
    {
        name: '通讯录',
    },
    {
        name: '通话记录',
    },
    {
        name: '短信',
    },
    {
        name: '开放平台',
    },
    {
        name: '记事本',
    },
    {
        name: '设备管理',
    },
    {
        name: '智能设备',
    },
    {
        name: '论文查重',
    },
];
const menuMore = (
    <div className="moreSelectStyle">
        {more.map(item => (
            <span key={item.name}> {item.name}</span>
        ))}
    </div>
);
class Nav extends Component {
    constructor(props) {
        super(props);
        this.router = props.history;
    }
    headerClick(key) {
        this.router.push(key);
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header">
                    <div className="logo">react</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['/NetworkDisk']}
                        onClick={({ key }) => this.headerClick(key)}
                    >
                        <Menu.Item key="/NetworkDisk">网盘</Menu.Item>
                        <Menu.Item key="/Share">分享</Menu.Item>
                        <Menu.Item key="/AMomentCamera">一刻相机</Menu.Item>
                        <Menu.Item key="4">
                            <Dropdown overlay={menuMore}>
                                <div>
                                    更多
                                    <CaretDownOutlined style={{ padding: '25px 0' }} />
                                </div>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
                {/* 匹配唯一一个路由 */}
                <Switch>
                    {/* 网盘路由 */}
                    <Route path="/NetworkDisk" strict={true} component={NetworkDisk}></Route>
                    {/* 分享路由 */}
                    <Route path="/Share" component={TabShare}></Route>
                    {/* 相机 */}
                    <Route path="/AMomentCamera" component={AMomentCamera}></Route>
                    {/* 更多 */}
                    {/* 404 */}
                    <Route path="**" component={Fint}></Route>
                </Switch>
            </Layout>
        );
    }
}
export default Nav;
