import React, { Component } from 'react';
import { Button, Menu, Dropdown, Input } from 'antd';
import {
    UploadOutlined,
    DownloadOutlined,
    FileAddOutlined,
    SearchOutlined,
    QrcodeOutlined,
    MenuOutlined,
    ProjectOutlined,
    CheckOutlined,
} from '@ant-design/icons';
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">上传文件</Menu.Item>
        <Menu.Item key="2">上传文件夹</Menu.Item>
    </Menu>
);
function handleMenuClick(params) {
    console.log(params);
}
const addMenuSelect = (
    <Menu onClick={handleMenuClickAdd}>
        <Menu.Item key="1">新建文件夹</Menu.Item>
        <Menu.Item key="2">新建Word</Menu.Item>
        <Menu.Item key="3">新建PPT</Menu.Item>
        <Menu.Item key="4">新建Excel</Menu.Item>
        <Menu.Item key="5">新建在线文档</Menu.Item>
    </Menu>
);
function handleMenuClickAdd(params) {
    console.log(params);
}
const listSelect = (
    <Menu onClick={handleMenuClickList}>
        <Menu.Item key="1">推送到任务列表</Menu.Item>
        <Menu.Item key="2">添加设备</Menu.Item>
    </Menu>
);
function handleMenuClickList(params) {
    console.log(params);
}
const menuRight = (
    <Menu onClick={menuRightClick}>
        <Menu.Item key="1" icon={<CheckOutlined style={{ color: 'skyblue' }} />}>
            文件名
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckOutlined style={{ color: 'skyblue' }} />}>
            大小
        </Menu.Item>
        <Menu.Item key="3" icon={<CheckOutlined style={{ color: 'skyblue' }} />}>
            修改日期
        </Menu.Item>
    </Menu>
);
function menuRightClick(params) {
    console.log(params);
}
export default class ElseTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="publicLeft">
                    <Dropdown overlay={menu}>
                        <Button type="primary" style={{ marginRight: '15px' }}>
                            <UploadOutlined />
                            上传
                        </Button>
                    </Dropdown>
                    <Dropdown overlay={addMenuSelect}>
                        <Button type="primary" ghost style={{ marginRight: '15px' }}>
                            <FileAddOutlined />
                            新建
                        </Button>
                    </Dropdown>
                    <Button
                        type="primary"
                        ghost
                        icon={<DownloadOutlined />}
                        style={{ marginRight: '15px' }}
                    >
                        离线下载
                    </Button>
                    <Dropdown overlay={listSelect}>
                        <Button
                            type="primary"
                            ghost
                            icon={<UploadOutlined />}
                            style={{ marginRight: '15px' }}
                        >
                            推送到设备
                        </Button>
                    </Dropdown>
                </div>
                <div className="publicRight">
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <Input
                            className="input"
                            placeholder="搜索您的文件"
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
                    <Dropdown overlay={menuRight}>
                        <ProjectOutlined className="fontImage" />
                    </Dropdown>
                    <QrcodeOutlined className="fontImage" />
                    <MenuOutlined className="fontImage" />
                </div>
            </>
        );
    }
}
