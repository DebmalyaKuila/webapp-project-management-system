import React,{useState} from 'react'
import{ Typography } from 'antd'
import {    
  UsergroupAddOutlined,
  ProjectOutlined,
  ContactsOutlined } from '@ant-design/icons'

import CardsComponent from '../components/CardsComponent'

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <div className='w-full flex flex-wrap'>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Employeess" value={2} icon={<UsergroupAddOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)" ,background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/>
        </div>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Projects" value={3} icon={<ProjectOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)",background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/></div>
        <div className='w-full lg:w-1/2 p-4'>
        <CardsComponent title="Clients" value={4} icon={<ContactsOutlined style={{fontSize:"2rem",color:"rgb(75,85,99)" ,background:"rgb(209,213,219)",borderRadius:"50%",padding:"10px"}}/>}/></div>
      </div>
    </div>
  )
}

export default Dashboard
