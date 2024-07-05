import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const ClientCard = ({client}) => {
  return (
    <Card
    hoverable
    style={{
      width:"150px",
      height:"200px",
      margin:"25px 40px"
  }}
  cover={<div style={{height:"70px"}} ><UserOutlined className='text-6xl w-full h-full bg-slate-200 text-slate-500 flex justify-center items-center'/></div>}
  >
    <Meta
    description={<div>
      
      <p className='bg-green-500 text-white px-1'>{client.name}</p>
      <div className='pt-2 flex flex-col'>
        <div>Company :</div>
        <div>{client.company}</div>
      </div>
      
      </div>}
    ></Meta>
  </Card>
  )
}

export default ClientCard
