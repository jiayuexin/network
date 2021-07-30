import React, { Component } from 'react';
import { Button, Tabs, Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import './public.css';
const { TabPane } = Tabs;
const menu = (
    <Menu onClick={handleMenuSetting}>
        <Menu.Item key="1">关闭智能分类人脸分组</Menu.Item>
        <Menu.Item key="2">分类说明</Menu.Item>
    </Menu>
);
function handleMenuSetting(params) {
    console.log(params);
}
export default class ImagesTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="publicLeft">
                    <Tabs type="card">
                        <TabPane tab="时光轴" key="1"></TabPane>
                        <TabPane tab="智能分类" key="2"></TabPane>
                        <TabPane tab="最近上传" key="3"></TabPane>
                    </Tabs>
                </div>
                <div className="publicRight">
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <Input
                            className="input"
                            placeholder="通过人物，事物，地点搜索你的图片"
                            style={{
                                borderRadius: '30px',
                                backgroundColor: 'rgb(250, 248, 248)',
                                width: '300px',
                            }}
                        />
                        <Button
                            type="primary"
                            shape="circle"
                            ghost
                            icon={<SearchOutlined />}
                            style={{ position: 'absolute', right: 0 }}
                        />
                    </div>
                    <Dropdown overlay={menu}>
                        <SettingOutlined className="fontImage" />
                    </Dropdown>
                </div>
            </>
        );
    }
}
