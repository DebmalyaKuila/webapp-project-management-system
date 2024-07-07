import React, { useState,useEffect } from 'react';
import { Form , message , Input, Button,Modal, Typography ,Space  } from 'antd'
const { Item } = Form;
import axios from 'axios';

import AddCard from '../components/AddCard';
import ClientCard from '../components/ClientCard';


const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};

const Clients = () => {

  
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/clients/`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` }})
    .then(res=>res.data)
    .then(data => setClients(data.clients))

  },[])
  
  const [isModalOpen, setisModalOpen] = useState(false);
  const onFinish =(data)=>{
    //API call 
    try {
    setisModalOpen(false)
    message.success("created new project",2 )
      
    } catch (error) {
      setisModalOpen(false)
      message.error("Some error occured !",2 )
      console.log(error);
    }

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
name='addClientForm'
onFinish={onFinish}
>
    <Space className='w-full flex justify-center text-lg font-bold my-10'>Add client</Space>
    <Item 
          label="Client name" 
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter client (in contact) name"
            }
          ]}
          > 
          <Input placeholder='Client name'/> 
          </Item>
    <Item 
          label="Company" 
          name="company"
          rules={[
            {
              required: true,
              message: "Please enter company name"
            }
          ]}
          > 
          <Input placeholder="Client's company"/> 
          </Item>
          <Item 
          label="Email" 
          name="email"
          rules={[
            {
              required: true,
              type:"email",
              message: "Please enter client's email"
            }
          ]}
          > 
          <Input placeholder='Client email' /> 
          </Item>
          <Item 
          label="Contact number" 
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter client's contact number"
            }
          ]}
          > 
          <Input placeholder='Phone number' type='Number'/> 
          </Item>
      <Item 
      label="Paid amount" 
      name="paid"
      rules={[
        {
          required: true,
          message: "Please enter client's advance payment"
        }
      ]}
      > 
      <Input placeholder='Amount paid (INR)' type='Number' min={0} addonAfter=" ₹" /> 
      </Item>
      <Item 
      label="Budget" 
      name="budget"
      rules={[
        {
          required: true,
          message: "Please enter client's project budget"
        }
      ]}
      > 
      <Input placeholder='Budget amount (INR)' type='Number' min={0} addonAfter=" ₹" /> 
      </Item>
      <Item 
      {...tailLayout}
      > 
      <Button htmlType="submit" type="primary">Add client</Button>
      </Item> 
</Form>
  </Modal>
<div>
  <Typography.Title level={3}>Clients</Typography.Title>
  <Typography.Text>You have<span className='font-bold'> {clients.length} </span>clients</Typography.Text>
  <div className='flex flex-wrap mt-8'>
    <AddCard title="Add Client" setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}/>
    {
      clients.map((client,index)=><ClientCard  client={client} key={index}/>)
    }
  </div>
</div>
</>
  )
}

export default Clients
