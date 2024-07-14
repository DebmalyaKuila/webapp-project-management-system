import React,{useState} from 'react'
import { EditOutlined,DeleteOutlined} from '@ant-design/icons';
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

const ProjectCard = ({project,editProject,deleteProject}) => {


  const [isModalOpen, setisModalOpen] = useState(false);
  const [isModalOpen2, setisModalOpen2] = useState(false);


  return (<>
  <Modal
        centered
        open={isModalOpen}
        onOk={() => setisModalOpen(false)}
        onCancel={() => setisModalOpen(false)}
        footer={null}
      >
       <Form 
       initialValues={{...project,deadline:dayjs(project.deadline,'DD-MM-YYYYTHH:mm:ssZ[Z]')}}
    {...layout}
    onFinish={(formData)=>{
      editProject(project._id,formData)
      setisModalOpen(false)
    }}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Edit project</Space>
          <Item 
          label="Title" 
          name="title"
          rules={[
            {
              required: true,
              message: "project title is required"
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
              message: "project deadline is required"
            }
          ]}
          > 
          <DatePicker  
          placeholder='Project deadline' 
          format='DD-MM-YYYY'
          disabledDate={(current) => {
            let customDate = dayjs().format("DD-MM-YYYY");
            return current && current < dayjs(customDate, "DD-MM-YYYY");
          }} 
          allowClear/> 
          </Item>
          <Item 
          label="Income" 
          name="income"
          rules={[
            {
              required: true,
              message: "project income is required"
            }
          ]}
          > 
          <Input 
          placeholder='Project income (INR) ' 
          type='Number'
          /> 
          </Item>
          <Item 
          {...tailLayout}
          > 
          <Button htmlType="submit" type="primary">Save</Button>
          </Item> 
    </Form>
      </Modal>
    <Card
    hoverable
    style={{
      width:"150px",
      height:"200px",
      margin:"5px 50px 75px"
  }}
  cover={<p style={{height:"75px"}} className='bg-blue-400 font-semibold text-white py-2 px-1 rounded'>{project?.title}</p>}
  actions={[
    <EditOutlined style={{color:"blue"}} key="edit" onClick={()=>setisModalOpen(true)}/>,
    <DeleteOutlined style={{color:"red"}} key="delete" onClick={()=>setisModalOpen2(true)}/>
  ]}
  >
    <Meta
    description={<div>
      <div className='pt-2 flex flex-col'>
        <div className='text-black'>{project.income?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0} ₹</div>
        <div className='text-black'>Deadline :</div>
        <div>{project.deadline.slice(0,10)}</div>
      </div>
      
      </div>}
    ></Meta>
  </Card>
  <Modal
        open={isModalOpen2}
        centered
        okText="Delete"
        okType='danger'
        title="Are you sure ?"
        onCancel={() => setisModalOpen2(false)}
        onClose={() => setisModalOpen2(false)}
        onOk={() => {
          //delete client
          deleteProject(project._id)
          setisModalOpen2(false)
        }}
      >
      </Modal>
  </>
  )
}

export default ProjectCard
