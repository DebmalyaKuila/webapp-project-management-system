import React from 'react'
import {
    HomeOutlined,
    UserOutlined,
    ProjectOutlined,
    MoneyCollectOutlined
  } from '@ant-design/icons';
  import { Menu } from 'antd';


  const items = [
    { key: "dashboard", label: "Dashboard",  icon: <HomeOutlined />, },
    { key: "contacts", label: "Contacts",  icon: <UserOutlined />, },
    { key: "projects", label: "Projects",  icon: <ProjectOutlined/>, },
    { key: "invoices", label: "Invoices",  icon: <MoneyCollectOutlined />, },
  ];

const MenuList = () => {


    return (
      <>
      <Menu
      theme='dark'
      items={items}
      defaultSelectedKeys={['dashboard']}
      />
      </>
       
  )
}

export default MenuList
