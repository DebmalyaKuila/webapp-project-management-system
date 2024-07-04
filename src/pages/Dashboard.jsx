import React from 'react'
import{ Typography } from 'antd'
import {    
  UsergroupAddOutlined,
  ProjectOutlined,
  MoneyCollectOutlined,
  ContactsOutlined } from '@ant-design/icons'

import CardsComponent from '../components/CardsComponent'

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <div className='w-full flex flex-wrap'>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Contacts" value={13} icon={<UsergroupAddOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)" ,background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/>
        </div>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Projects" value={6} icon={<ProjectOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)",background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/></div>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Customers" value={4} icon={<ContactsOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)" ,background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/></div>
      </div>
    </div>
  )
}

export default Dashboard
