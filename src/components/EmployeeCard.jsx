import React,{useState} from 'react'
import {UserOutlined} from '@ant-design/icons';
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


const EmployeeCard = ({employee}) => {

const [isModalOpen, setisModalOpen] = useState(false);
const onFinish =(formData)=>{
  console.log(formData);
  setisModalOpen(false)
  //API call to update employee details
  console.log("edit data :",data);
  try {
    message.success("edited employee data",2 )
    
  } catch (error) {
    message.error("Some error occured !",2 )
    console.log(error);
  }

}

const deleteEmployee=()=>{
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
    {...layout}
    initialValues={employee}
    name='employeeForm'
    onFinish={onFinish}
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
          <Button htmlType="submit" type="primary">Save</Button>
          <Button danger className='ml-16' onClick={deleteEmployee}>Delete</Button>
          </Item> 
    </Form>
  </Modal>
    <Card
    hoverable
    onClick={() => setisModalOpen(true)}
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
  </>
  )
}

export default EmployeeCard
