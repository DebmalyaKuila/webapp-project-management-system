import React from 'react';
import {PlusOutlined} from '@ant-design/icons';
import { Card,Button } from 'antd';


const AddCard = ({title,isModalOpen,setisModalOpen}) => {
  return (
    <Card
    hoverable
    onClick={()=>setisModalOpen(!isModalOpen)}
    style={{
      width:"150px",
      height:"200px",
      margin:"25px 40px"
  }}
  actions={[
    <Button type="link" >
      <PlusOutlined />{title}
    </Button>
  ]}
  >
  </Card>
  )
}

export default AddCard
