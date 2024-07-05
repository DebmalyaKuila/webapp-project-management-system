import React  from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons"
import { Button, Layout ,Dropdown } from 'antd';
const { Header} = Layout;

const items=[
  {
    key:"account",
    label:(
      <a href="#"> Your Profile </a>
    )
  },
  {
    key:"logout",
    danger:true,
    label:(
      <a href="/" > Log out </a>
    )
  }
]

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
    <Dropdown 
    menu={{items}}>
      <UserOutlined className='p-3 rounded-full bg-slate-300 text-slate-600'/>
    </Dropdown>
    </Header>
  )
}

export default MainHeader
