import React, { useState ,useEffect } from 'react';
import { Form , message , Input, Button,Modal, Typography ,Space ,DatePicker } from 'antd'
const { Item } = Form;
import axios from 'axios';
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

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

  const addProject=(formData)=>{
    //API call 
    console.log("got formData -> ",formData);
    formData.deadline=formData.deadline.local().format('DD-MM-YYYYTHH:mm:ssZ[Z]')
    console.log(" deadline change , before sending to the server -> ",formData);
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/projects/` , formData, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data =>{
      setProjects([...projects,data.project])
      message.success("Added new project",2 )
      }).catch(err =>{
      message.error("Some error occured !",2 )
      })
    setisModalOpen(false)
  }

  const editProject = (id, formData) => {
    //API call 
    // data.deadline=data.deadline.toISOString()
    formData.deadline=formData.deadline.local().format('DD-MM-YYYYTHH:mm:ssZ[Z]')
    axios.patch(`${import.meta.env.VITE_API_BASE_URL}/v1/projects/${id}`, formData, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
      .then(res => res.data)
      .then(data => {
        const newData = projects.map(project => {
          if(project._id == id){
            return data
          }
          return project
        })
        setProjects(newData)
        message.success("changed project details", 2)
      }).catch(err => {
        message.error("Some error occured !", 2)
      })
  }


  const deleteProject=(id)=>{
    //API call  
   axios.delete(`${import.meta.env.VITE_API_BASE_URL}/v1/projects/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
   .then(res => res.data)
   .then(data => {
     const newData = projects.filter(project => project._id != id)
     setProjects(newData)
     message.success("Deleted project details", 2)
   }).catch(err => {
     message.error("Some error occured !", 2)
   })
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
    onFinish={addProject}
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
          <DatePicker  
          placeholder='Project deadline' 
          format="DD-MM-YYYY"
          disabledDate={(current) => {
            let customDate = dayjs().format("DD-MM-YYYYTHH:mm:ssZ");
            return current && current < dayjs(customDate, "DD-MM-YYYYTHH:mm:ss");
          }} 
          allowClear/> 
          </Item>
          <Item 
          label="Income" 
          name="income"
          rules={[
            {
              required: true,
              message: "Please enter estimated project income"
            }
          ]}
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
          projects.map( (project,index) => <ProjectCard 
          key={index} 
          project={project}
          editProject={editProject}
          deleteProject={deleteProject}
          
          />)
        }
      </div>
    </div>
    </>
  )
}

export default Projects
