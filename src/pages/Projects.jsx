import React, { useState ,useEffect } from 'react';
import { Form , message , Input, Button,Modal, Typography ,Space ,DatePicker  } from 'antd'
const { Item } = Form;
import axios from 'axios';

import AddCard from '../components/AddCard';
import ProjectCard from '../components/ProjectCard';


const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};


const Projects = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/projects/`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data => setProjects(data.projects))

  },[])


  const onFinish =(data)=>{
    //API call 
    try {
    data.deadline=data.deadline.toISOString()
    setProjects([...projects,data])
    setisModalOpen(false)
    message.success("created new project",2 )
      
    } catch (error) {
      setisModalOpen(false)
      message.error("Some error occured !",2 )
      console.log(error);
    }

}
  return (
    <>
    <Modal
        centered
        open={isModalOpen}
        onOk={() => setisModalOpen(false)}
        onCancel={() => setisModalOpen(false)}
        footer={null}
      >
       <Form 
    {...layout}
    name='createProjectForm'
    onFinish={onFinish}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Create a project</Space>
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
          <Button htmlType="submit" type="primary">Create Project</Button>
          </Item> 
    </Form>
      </Modal>
    <div>
      <Typography.Title level={3}>Projects</Typography.Title>
      <Typography.Text>You have<span className='font-bold'> {projects.length} </span>projects</Typography.Text>
      <div className='flex flex-wrap mt-8'>
        <AddCard title="Add Projects" setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
        {
          projects.map( (project,index) => <ProjectCard key={index} project={project}/>)
        }
      </div>
    </div>
    </>
  )
}

export default Projects
