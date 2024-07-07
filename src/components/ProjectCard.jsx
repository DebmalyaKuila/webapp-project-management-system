import React,{useState} from 'react'
import {UserOutlined} from '@ant-design/icons';
import { Form , message ,Card , Input, Button , Modal, Space ,DatePicker  } from 'antd'
const { Meta } = Card;
const { Item } = Form;

import dayjs from 'dayjs';

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};

const ProjectCard = ({project}) => {

  const[data,setData]=useState({...project,deadline:dayjs(project.deadline)})

  const [isModalOpen, setisModalOpen] = useState(false);
  const onFinish =(formData)=>{
    formData.deadline=formData.deadline.toISOString()
    console.log(formData);
    setisModalOpen(false)
    //remember to convert the date back to string
    //API call to update project details
    try {
      message.success("edited project details",2 )
      
    } catch (error) {
      message.error("Some error occured !",2 )
      console.log(error);
    }
  }
  
  const deleteProject=()=>{
    console.log("deleted");
  }
  


  return (<>
  <Modal
        centered
        open={isModalOpen}
        onOk={() => setisModalOpen(false)}
        onCancel={() => setisModalOpen(false)}
        footer={null}
      >
       <Form 
       initialValues={data}
    {...layout}
    name='ProjectForm'
    onFinish={onFinish}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Edit project</Space>
          <Item 
          label="Title" 
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter project title"
            }
          ]}
          > 
          <Input placeholder='Project title'/> 
          </Item>
          <Item 
          label="Deadline" 
          name="deadline"
          rules={[
            {
              required: true,
              message: "Please enter project deadline"
            }
          ]}
          > 
          <DatePicker  placeholder='Project deadline' format="DD-MM-YYYY" /> 
          </Item>
          <Item 
          label="Income" 
          name="income"
          > 
          <Input placeholder='Project income (INR) ' type='Number'/> 
          </Item>
          <Item 
          {...tailLayout}
          > 
          <Button htmlType="submit" type="primary">Save</Button>
          <Button danger className='ml-16' onClick={deleteProject}>Delete</Button>
          </Item> 
    </Form>
      </Modal>
    <Card
    onClick={()=>setisModalOpen(true)}
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
  </>
  )
}

export default ProjectCard
