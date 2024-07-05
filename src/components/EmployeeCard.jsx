import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;


const EmployeeCard = ({employee}) => {
  return (
    <Card
    hoverable
    style={{
      width:"150px",
      height:"200px",
      margin:"25px 40px"
  }}
  cover={<div style={{height:"100px"}} ><UserOutlined className='text-6xl w-full h-full bg-slate-200 text-slate-500 flex justify-center items-center'/></div>}
  >
    <Meta
    title={<p className='px-2 inline'>{employee.name}</p>}
    description={<p className='bg-green-500 w-full font-semibold text-white px-2'>{employee.designation}</p>}
    ></Meta>
  </Card>
  )
}

export default EmployeeCard
