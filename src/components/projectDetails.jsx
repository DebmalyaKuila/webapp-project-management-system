import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb ,Space, Typography ,Form ,Input, Button } from 'antd'
import {PlusOutlined , DeleteOutlined ,EllipsisOutlined} from '@ant-design/icons';

const ProjectDetails = () => {
  const {id}=useParams()
  const [tasks,setTasks]=useState([])
  const [form]=Form.useForm()

  const addTask =(data)=>{
        console.log(data.task);
        setTasks([...tasks,data.task])
        console.log(tasks);
        form.resetFields()
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <a href="/dashboard">PMS</a>,
          },
          {
            title: <a href="/projects">Projects</a>,
          },
          {
            title: <a href="">{id}</a>,
          }
        ]}
      />
      <Space className='pt-6' direction='vertical'>
      <div><span className='font-semibold'>Project ID : </span>{id}</div>
      <div><span className='font-semibold'>Project title : </span>hghghdbuyhu hghghdbuyhu</div>
      <div><span className='font-semibold'>Project deadline : </span>18-07-2024</div>
      <div><span className='font-semibold'>Project description : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis est quo laudantium voluptatum optio impedit culpa, ipsum quasi quod dolor minima expedita alias nostrum natus quis accusantium id nemo quia laborum recusandae aliquam molestias sapiente. Similique dolor perferendis distinctio excepturi quasi? Est mo deserunt ab assumenda quod expedita amet porro nobis aspernatur perferendis adipisci, facilis cum cupiditate eius? Voluptate tempora possimus odio ut laboriosam, explicabo quibusdam accusamus optio esse nemo blanditiis fuga corrupti iste dolorem dicta suscipit unde nesciunt! Perspiciatis aliquid architecto quae saepe error iusto, deserunt, omnis consequatur quisquam expedita dolore ducimus itaque maiores animi rerum commodi? Suscipit, veritatis.</div>
      <Typography.Title level={4} className='text-center py-4'>Tasks</Typography.Title>
      <div>
        <Typography.Text >New Task</Typography.Text>
        <div>
          <Form 
          form={form}
          onFinish={(data)=>addTask(data)}>
          <Form.Item
          name='task'
          className='w-full mt-2'
          rules={[
            {
              required:true,
              message:"This fiels cannot be empty"
            }
          ]}
          >
          <Input  
          placeholder='Enter task'
          />
          </Form.Item>
          <Button icon={<PlusOutlined />} shape='circle' htmlType='submit' className='bg-blue-400 text-white'></Button>
          </Form>
        </div>
        <div style={{height:"1px",width:"100%",background:"black"}} className='my-6'></div>
      </div>
      {
        tasks.map((task , index)=>
          <div key={index} className='flex justify-between py-4 px-4 lg:px-8'>
         <div> {index+1} . {task}</div>
         <div className='ml-4 lg:ml-8'>
          <EllipsisOutlined className='mr-4' />
          <DeleteOutlined style={{color:"red"}}/></div>
          </div>
        )
      }
      </Space>

    </>
  )
}

export default ProjectDetails
