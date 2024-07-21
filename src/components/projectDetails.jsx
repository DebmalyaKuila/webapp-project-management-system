import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb, Space, Typography, Form, Input, Button, Modal, Select, Tag, Dropdown } from 'antd'
const { Item } = Form
import { PlusOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
}

const ProjectDetails = () => {
  const { id } = useParams()
  const [tasks, setTasks] = useState([])
  const [form] = Form.useForm()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  //add task to project
  const addTask = (data) => {
    setIsModalOpen(false)
    data = { ...data, completed: false }
    console.log(data);
    setTasks([...tasks, data])
    console.log(tasks);
    form.resetFields()
  }
  //edit tasks of project
  const editTask = (formData) => {
    setIsEditModalOpen(false)
    console.log(formData)
    //API call
  }
  //delete task of project
  //delete task with the task id given as a parameter in this deleteTask function during API call
  const deleteTask = (formData) => {
    setIsDeleteModalOpen(false)
    console.log("deleted")
    //API call
  }

  return (
    <>
      <Breadcrumb
        items={[
          { title: <a href="/dashboard">PMS</a>, },
          { title: <a href="/projects">Projects</a> },
          { title: <a href="">{id}</a>, }
        ]}
      />
      <Space className='pt-6' direction='vertical'>
        <div><span className='font-semibold'>Project ID : </span>{id}</div>
        <div><span className='font-semibold'>Project title : </span>hghghdbuyhu hghghdbuyhu</div>
        <div><span className='font-semibold'>Project deadline : </span>18-07-2024</div>
        <div><span className='font-semibold'>Project description : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis est quo laudantium voluptatum optio impedit culpa, ipsum quasi quod dolor minima expedita alias nostrum natus quis accusantium id nemo quia laborum recusandae aliquam molestias sapiente. Similique dolor perferendis distinctio excepturi quasi? Est mo deserunt ab assumenda quod expedita amet porro nobis aspernatur perferendis adipisci, facilis cum cupiditate eius? Voluptate tempora possimus odio ut laboriosam, explicabo quibusdam accusamus optio esse nemo blanditiis fuga corrupti iste dolorem dicta suscipit unde nesciunt! Perspiciatis aliquid architecto quae saepe error iusto, deserunt, omnis consequatur quisquam expedita dolore ducimus itaque maiores animi rerum commodi? Suscipit, veritatis.</div>
        <Typography.Title level={3} className='text-center py-4'>Project tasks</Typography.Title>
        <div>
          <div className='w-full text-center'>
            <Button type='primary'
              className='font-semibold px-4 py-6'
              icon={<PlusOutlined />}
              iconPosition='end'
              onClick={() => setIsModalOpen(true)}
            >Create new task
            </Button>
          </div>
          <div style={{ height: "1px", width: "100%", background: "black" }} className='my-6'></div>
        </div>
        {
          tasks.map((task, index) =>
            <div key={index} className='flex justify-between py-4 px-4 lg:px-8 border-2 border-slate-300 rounded'>
              <div> <span className='font-semibold'>{index + 1}</span> . <span className='pr-6'>{task.task} </span>
                {
                  task.completed ? <Tag color="green" className='tracking-wider font-semibold px-2 py-1'>completed</Tag> :
                    <Tag color="red" className='tracking-wider font-semibold px-2 py-1'>ongoing</Tag>
                }</div>
              <div className='ml-4 lg:ml-8'>
                <EllipsisOutlined className='mr-6' onClick={() => setIsEditModalOpen(true)} />
                <DeleteOutlined style={{ color: "red" }} onClick={() => setIsDeleteModalOpen(true)} /></div>
              <Modal
                open={isDeleteModalOpen}
                centered
                footer={[
                  <Button key="cancel" onClick={() => setIsDeleteModalOpen(false)}>
                    Cancel
                  </Button>,
                  <Button 
                  key="delete" 
                  danger
                  onClick={()=>deleteTask()}
                  >
                    Delete
                  </Button>
                ]}
                onCancel={() => setIsDeleteModalOpen(false)}
              >
                <Typography.Text className='font-semibold'>Are you sure ?</Typography.Text>
              </Modal>
              <Modal
              open={isEditModalOpen}
              onCancel={()=>setIsEditModalOpen(false)}
              footer={null}
              >
              <Form
          {...layout}
          initialValues={task}
          onFinish={(formData) => editTask(formData)}
        >
          <Space className='w-full flex justify-center text-lg font-bold my-10'>Edit task</Space>
          <Item
            label="Task"
            name="task"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder='Enter task' />
          </Item>
          <Item
            label="Assignees"
            name="assignees"
          >
            <Select
              showSearch
              placeholder="Assign to"
              mode="multiple"
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Jack',
                },
                {
                  value: '2',
                  label: 'Lucy',
                },
                {
                  value: '3',
                  label: 'Tom',
                },
              ]}
            />
          </Item>
          <Item
          label="Status"
          name="completed"
          >
          <Select
              showSearch
              placeholder="task status"
              options={[
                {
                  value:  false,
                  label: 'Ongoing',
                },
                {
                  value:  true,
                  label: 'Completed',
                }
              ]}
            />
          </Item>
          <Item
            {...tailLayout}
          >
            <Button
              htmlType="submit"
              type="primary"
            >Save</Button>
          </Item>
        </Form>
              </Modal>
            </div>
          )
        }
      </Space>
      <Modal
        open={isModalOpen}
        centered
        onCancel={() => setIsModalOpen(!isModalOpen)}
        footer={null}
      >
        <Form
          {...layout}
          form={form}
          onFinish={(formData) => addTask(formData)}
        >
          <Space className='w-full flex justify-center text-lg font-bold my-10'>Add task</Space>
          <Item
            label="Task"
            name="task"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder='Enter task' />
          </Item>
          <Item
            label="Assignees"
            name="assignees"
          >
            <Select
              showSearch
              placeholder="Assign to"
              mode="multiple"
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Jack',
                },
                {
                  value: '2',
                  label: 'Lucy',
                },
                {
                  value: '3',
                  label: 'Tom',
                },
              ]}
            />
          </Item>
          <Item
            {...tailLayout}
          >
            <Button
              htmlType="submit"
              type="primary"
            >Create task</Button>
          </Item>
        </Form>
      </Modal>

    </>
  )
}

export default ProjectDetails
