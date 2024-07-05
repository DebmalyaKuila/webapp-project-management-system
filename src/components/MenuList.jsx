import React from 'react'
import {
    HomeOutlined,
    UsergroupAddOutlined,
    ProjectOutlined,
    MoneyCollectOutlined,
    ContactsOutlined
  } from '@ant-design/icons';
  import { Menu } from 'antd';

  import { useNavigate } from 'react-router-dom';


  const items = [
    { key: "dashboard", label: "Dashboard",  icon: <HomeOutlined />, },
    { key: "employees", label: "Employees",  icon: <UsergroupAddOutlined /> },
    { key: "projects", label: "Projects",  icon: <ProjectOutlined/>, },
    { key: "clients", label: "Clients",  icon: <ContactsOutlined />, },
    { key: "invoices", label: "Invoices",  icon: <MoneyCollectOutlined />, },
  ];

const MenuList = () => {

  const navigate=useNavigate()

    const onClick=({key})=>{
        navigate(`/${key}`)
    }


    return (
      <>
      <Menu
      theme='dark'
      items={items}
      defaultSelectedKeys={['dashboard']}
      onClick={onClick}
      />
      </>
       
  )
}

export default MenuList
