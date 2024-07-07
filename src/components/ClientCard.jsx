import React,{useState} from 'react'
import {UserOutlined} from '@ant-design/icons';
import { Form , message ,Card , Input, Button,Modal, Space } from 'antd'
const { Meta } = Card;
const { Item } = Form;

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};


const ClientCard = ({client}) => {

  const [isModalOpen, setisModalOpen] = useState(false);
  const onFinish =(formData)=>{
    console.log(formData);
    setisModalOpen(false)
    //remember to convert the date back to string
    //API call to update project details
    try {
      message.success("edited client details",2 )
      
    } catch (error) {
      message.error("Some error occured !",2 )
      console.log(error);
    }
  }
  
  const deleteClient=()=>{
    console.log("deleted");
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
name='ClientForm'
initialValues={client}
onFinish={onFinish}
>
    <Space className='w-full flex justify-center text-lg font-bold my-10'>Edit client details</Space>
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
      <Button htmlType="submit" type="primary">Save</Button>
      <Button danger onClick={deleteClient}>Save</Button>
      </Item> 
</Form>
  </Modal>
    <Card
    onClick={()=>setisModalOpen(true)}
    hoverable
    style={{
      width:"150px",
      height:"200px",
      margin:"25px 40px"
  }}
  cover={<div style={{height:"70px"}} ><UserOutlined className='text-6xl w-full h-full bg-slate-200 text-slate-500 flex justify-center items-center'/></div>}
  >
    <Meta
    description={<div>
      
      <p className='bg-green-500 text-white px-1'>{client.name}</p>
      <div className='pt-2 flex flex-col'>
        <div>Company :</div>
        <div>{client.company}</div>
      </div>
      
      </div>}
    ></Meta>
  </Card>
  </>
  )
}

export default ClientCard
