import React, { Component } from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
import { router } from '../router/router';
import { Route } from 'react-router-dom';
import PublicSearch from './publicSearch';
export default class NetworkDisk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.router = props.history;
    }
    menuClick(key) {
        this.router.push(key);
    }
    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <Sider
                    theme="dark"
                    width={200}
                    className="site-layout-background"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={value => this.setState({ collapsed: value })}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={({ key }) => this.menuClick(key)}
                    >
                        {router[0].children.map(item => (
                            <Menu.Item
                                key={item.path}
                                component={item.page}
                                icon={<Icon component={item.icon} />}
                            >
                                {item.pathName}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '10px' }}>
                    {/* 不需要面包屑,替换为公共功能 */}
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: '15px 24px',
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <PublicSearch></PublicSearch>
                        {/* 展示view的地方 */}
                        {router[0].children.map(item => (
                            <Route path={item.path} component={item.page} key={item.path}></Route>
                        ))}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
