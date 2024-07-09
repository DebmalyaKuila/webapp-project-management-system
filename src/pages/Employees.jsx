import React,{useState,useEffect} from 'react'
import { Form , message , Input, Button,Modal, Typography ,Space ,Select  } from 'antd'
const { Item } = Form;
import axios from 'axios';

import AddCard from '../components/AddCard'
import EmployeeCard from '../components/EmployeeCard'


const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
}

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/user/`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data => setEmployees(data))

  },[])

  const [isModalOpen, setisModalOpen] = useState(false);
  const [form]=Form.useForm()

  const addEmployee =(data)=>{
    //API call 
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/user/` , data , { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data =>{
       setEmployees([...employees,data.user])
       message.success("Added new employee",2 )
      }).catch(err =>{
      message.error("Some error occured !",2 )
      })

    setisModalOpen(false)
    form.resetFields()
    }

    const editEmployee=(id,data)=>{
      //API call 
    axios.patch(`${import.meta.env.VITE_API_BASE_URL}/v1/user/${id}` , data , { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data =>{
       console.log(data)
       const newData=employees.map( employee =>{
        if (employee._id==id) {
          return data  
        }
        return employee
       })
       setEmployees(newData)
       message.success("changed employee details",2 )
      }).catch(err =>{
      message.error("Some error occured !",2 )
      })
    }

    const deleteEmployee =(id)=>{
      //API call 
      axios.delete(`${import.meta.env.VITE_API_BASE_URL}/v1/user/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
      .then(res=>res.data)
      .then(data =>{
        const newData=employees.filter( emp => emp._id!=id)
         setEmployees(newData)
         message.success("Deleted employee details",2 )
        }).catch(err =>{
        message.error("Some error occured !",2 )
        console.log(err);
        })
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
    onFinish={addEmployee}
    >
        <Space className='w-full flex justify-center text-lg font-bold my-10'>Add employee</Space>
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
            employees.map((employee,index)=>
            <EmployeeCard 
            key={index} 
            editEmployee={editEmployee}
            deleteEmployee={deleteEmployee} 
            employee={employee}/>)
          }
      </div>
    </div>

    </>
  )
}

export default Employees
