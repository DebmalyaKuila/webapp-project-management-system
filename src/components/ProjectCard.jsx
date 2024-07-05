import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const ProjectCard = ({project}) => {
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
      
      <p className='bg-green-500 text-white px-1'>{project.title}</p>
      <div className='pt-2 flex flex-col'>
        <div>Deadline :</div>
        <div>{project.deadline}</div>
      </div>
      
      </div>}
    ></Meta>
  </Card>
  )
}

export default ProjectCard
