import React,{useState} from 'react'
import { Form , message , Input, Button,Modal, Typography ,Space ,Select  } from 'antd'
const { Item } = Form;

import AddCard from '../components/AddCard'
import EmployeeCard from '../components/EmployeeCard'


const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};


const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
    const [form]=Form.useForm()
  const onFinish =(data)=>{
    //API call 
    setisModalOpen(false)
    console.log(data);
    try {
      setEmployees([...employees,data])
      message.success("Added new employee",2 )
      
    } catch (error) {
      message.error("Some error occured !",2 )
      console.log(error);
    }
    form.resetFields()

}

  return (
    <><Modal
    centered
    open={isModalOpen}
    onOk={() => setisModalOpen(false)}
    onCancel={() => setisModalOpen(false)}
    footer={null}
  >
    <Form 
    {...layout}
    name='createEmployeeForm'
    form={form}
    onFinish={onFinish}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Create a project</Space>
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
          label="Password" 
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter employee's login password"
            }
          ]}
          > 
          <Input.Password placeholder="employee's login password" /> 
          </Item>
          <Item 
          {...tailLayout}
          > 
          <Button htmlType="submit" type="primary">Add Employee</Button>
          </Item> 
    </Form>
  </Modal>
    <div>
      <Typography.Title level={3}>Employees</Typography.Title>
      <Typography.Text>You have<span className='font-bold'> {employees.length} </span>employees</Typography.Text>
      <div className='flex flex-wrap mt-8'>
        <AddCard title="Add Employee" setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}  />
          {
            employees.map((employee,index)=> <EmployeeCard key={index} employee={employee}/>)
          }
      </div>
    </div>

    </>
  )
}

export default Employees
