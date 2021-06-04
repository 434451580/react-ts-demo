import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import request from '../utils/request'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export default class AppLayout extends React.Component {


    componentDidMount(): void {
        request('/api/test').then(res => {
            console.log(res)
        })
    }




    render(): any {

        return (
            <Layout>

            </Layout>
        )
    }
}