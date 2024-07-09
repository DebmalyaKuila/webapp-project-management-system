import React,{useState} from 'react'
import { EditOutlined,DeleteOutlined,UserOutlined} from '@ant-design/icons';
import { Form , message ,Card , Input, Button,Modal, Typography ,Space ,Select  } from 'antd'
const { Meta } = Card;
const { Item } = Form;

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};


const EmployeeCard = ({employee,deleteEmployee,editEmployee}) => {

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
    {...layout}
    initialValues={employee}
    onFinish={(formData)=>{
      editEmployee(employee._id,formData)
      setisModalOpen(false)
    }}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Edit employee</Space>
          <Item 
          label="Name" 
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter employee name"
            }
          ]}
          > 
          <Input placeholder='Employee name'/> 
          </Item>
          <Item 
          label="Email" 
          name="email"
          rules={[
            {
              required: true,
              type:"email",
              message: "Please enter employee's email"
            }
          ]}
          > 
          <Input placeholder='Contact email' /> 
          </Item>
          <Item 
          label="Phone no." 
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter employee's contact number"
            }
          ]}
          > 
          <Input placeholder='Phone number' type='Number'/> 
          </Item>
          <Item label="Designation" name="designation">
         <Select placeholder="employee role" >
           <Select.Option value="frontend developer">Frontend developer</Select.Option>
           <Select.Option value="backend developer">Backend developer</Select.Option>
           <Select.Option value="full stack developer">Full stack developer</Select.Option>
           <Select.Option value="project manager">Project manager</Select.Option>
           <Select.Option value="human resources">Human Resources</Select.Option>
          </Select>
       </Item>
          <Item 
          {...tailLayout}
          > 
          <Button 
          htmlType="submit" 
          type="primary">Save</Button>
          </Item> 
    </Form>
  </Modal>
    <Card
    hoverable
    style={{
      width:"150px",
      height:"200px",
      margin:"5px 25px 40px"
  }}
  cover={<div style={{height:"80px"}} >
    <UserOutlined className='text-6xl w-full h-full bg-slate-200 text-slate-500 flex justify-center items-center'/>
    <div  style={{height:"45px"}} className='px-2 overflow-hidden text-sm text-center'>{employee.name}</div>
    </div>}
  actions={[
    <EditOutlined style={{color:"blue"}} 
    key="edit" 
    onClick={() => setisModalOpen(true)}
    />,
    <DeleteOutlined style={{color:"red"}} 
    key="delete" 
    onClick={()=>setisModalOpen2(true)}
    // onClick={()=>deleteEmployee(employee._id)}
    />
  ]}
  >
    <Meta

    description={<p  style={{height:"46px"}}
      className='bg-blue-400 font-semibold text-white mt-8 px-2 rounded text-center'>{employee.designation}</p>}
    ></Meta>
  </Card>
  <Modal
  open={isModalOpen2} 
  centered
  okText="Delete"
  okType='danger'
  title="Are you sure ?"
  onCancel={()=>setisModalOpen2(false)}
  onClose={()=>setisModalOpen2(false)}
  onOk={()=>{
    deleteEmployee(employee._id)
    setisModalOpen2(false)
  }}
  >
  </Modal>
  </>
  )
}

export default EmployeeCard
