import React, { useState, useEffect } from 'react';
import { Form, message, Input, Button, Modal, Typography, Space } from 'antd'
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
      { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
      .then(res => res.data)
      .then(data => setClients(data.clients))

  }, [])

  const [isModalOpen, setisModalOpen] = useState(false);
  const [form] = Form.useForm()

  const addClient = (data) => {
    //API call 
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/clients/`, data,
      { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
      .then(res => res.data)
      .then(data => {
        setClients([...clients, data.client])
        message.success("New client added", 2)
      }).catch(err => {
        message.error("Some error occured !", 2)
      })

    setisModalOpen(false)
    form.resetFields()
  }

  const editClient = (id, data) => {
    //API call 
    axios.patch(`${import.meta.env.VITE_API_BASE_URL}/v1/clients/${id}`, data, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
      .then(res => res.data)
      .then(data => {
        const newData = clients.map(client => {
          if(client._id == id){
            return data
          }
          return client
        })
        setClients(newData)
        message.success("changed client details", 2)
      }).catch(err => {
        message.error("Some error occured !", 2)
      })
  }

  const deleteClient = (id) => {
    //API call 
    axios.delete(`${import.meta.env.VITE_API_BASE_URL}/v1/clients/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}` } })
      .then(res => res.data)
      .then(data => {
        const newData = clients.filter(client => client._id != id)
        setClients(newData)
        message.success("Deleted client details", 2)
      }).catch(err => {
        message.error("Some error occured !", 2)
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
        name='addClientForm'
        form={form}
        onFinish={(data) => {
          addClient(data)
          setisModalOpen(false)
        }}
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
          <Input placeholder='Client name' />
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
          <Input placeholder="Client's company" />
        </Item>
        <Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
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
          <Input placeholder='Phone number' type='Number' />
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
          <AddCard title="Add Client" setisModalOpen={setisModalOpen} isModalOpen={isModalOpen} />
          {
            clients.map((client, index) =>
              <ClientCard
                client={client}
                key={index}
                editClient={editClient}
                deleteClient={deleteClient}
              />)
          }
        </div>
      </div>
    </>
  )
}

export default Clients
