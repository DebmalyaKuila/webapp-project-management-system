import React,{useState}  from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons"
import { Button, Layout } from 'antd';
const { Header} = Layout;

const MainHeader = ({collapsed,toggleCollapsed}) => {

  return (
    <Header className='text-white w-full  flex justify-between items-center shrink-0'>
    <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{backgroundColor:"inherit",color:"white",border:"2px solid white"}}
      >
      {collapsed ? <MenuUnfoldOutlined className='text-lg'/> : <MenuFoldOutlined className='text-lg' />}
    </Button>
    <UserOutlined className='p-3 rounded-full bg-slate-300 text-slate-600'/>
    </Header>
  )
}

export default MainHeader
