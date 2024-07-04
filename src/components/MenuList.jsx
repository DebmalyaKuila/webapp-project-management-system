import React from 'react'
import {
    HomeOutlined,
    UsergroupAddOutlined,
    ProjectOutlined,
    MoneyCollectOutlined,
    ContactsOutlined
  } from '@ant-design/icons';
  import { Menu } from 'antd';


  const items = [
    { key: "dashboard", label: "Dashboard",  icon: <HomeOutlined />, },
    { key: "contacts", label: "Contacts",  icon: <UsergroupAddOutlined /> },
    { key: "projects", label: "Projects",  icon: <ProjectOutlined/>, },
    { key: "customers", label: "Customers",  icon: <ContactsOutlined />, },
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
