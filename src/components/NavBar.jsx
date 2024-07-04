import React from 'react'
import { Layout,Drawer } from 'antd';
const { Header,Sider } = Layout;

import MenuList from './MenuList.jsx'
import Logo from "../assets/Logo/logo"

const NavBar = ({collapsed,toggleCollapsed}) => {
  return (
      <>
        <Sider 
        collapsed={collapsed}
        className='h-screen fixed top-0 left-0 bottom-0 overflow-x-hidden font-bold'
        >
            <div>
          <Header className='flex justify-center items-center mb-16' >
          <Logo/>
          </Header>
          <MenuList />
          </div>
        </Sider>


        <Drawer
        closable={true}
        placement='left'
        open={collapsed}
        onClose={toggleCollapsed}
        onClick={toggleCollapsed}
        title={<Logo/>}
        style={{backgroundColor:"#001529"}}
        width='200px'
        >
        <MenuList/>
        </Drawer>

          
    </>
  )
}

export default NavBar
