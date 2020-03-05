import React from 'react'
import { Menu, Icon,  Layout } from 'antd'
import { Link } from 'react-router-dom'


export const SiderMenu = (props) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.collapsed} breakpoint={'md'} theme={'light'} onCollapse={props.onCollapse} collapsedWidth={0}>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='startshipsList'>
          <Link to={'/'}>
            <Icon type='dashboard'/>
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
