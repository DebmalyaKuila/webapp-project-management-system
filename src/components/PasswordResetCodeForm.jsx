import React from 'react';
import { Form, message, Input, Button, Typography } from 'antd'
const { Item } = Form;

const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};

const PasswordResetCodeForm = ({email}) => {

    const onFinish=(data)=>{
        try {
            delete data.ConfirmPassword
            const apiData={...data,email}
            console.log(apiData,"api call");
            //API call to reset password
            message.success("Password changed succesfully",1)
            //redirect to login page
        } catch (error) {
            message.error("something went wrong !",2)
        }

    }


  return (
    <>
    <Form
      {...layout}
      className='bg-white w-8/12 lg:w-6/12 py-20 lg:py-8 px-8 lg:px-0 bg-blue-500 rounded-md'
      name='loginForm'
      onFinish={onFinish}
    >
      <Typography.Title level={2} className='w-full flex justify-center text-lg font-bold pb-2'>Password reset</Typography.Title>
      <Item
        label="Password"
        name="newPassword"
        rules={[
          {
            required: true,message: "Please enter your new password"
            
          }
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Enter password' />
      </Item>
      <Item
        label="Confirm password"
        name="ConfirmPassword"
        rules={[
          {
            required: true,
            message:"Please enter your password"
          },
          ({getFieldValue})=>(
            {
                validator(_,value){
                    if(!value || value == getFieldValue("newPassword")){
                        return Promise.resolve()
                    }
                    return Promise.reject("both passwords has to be same")
                }
            }
          )
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Enter password' />
      </Item>
      <Item
        label="Reset Pin"
        name="pin"
        rules={[
          {
            required: true,
            message: "Please enter your pin"
          }
        ]}
        hasFeedback
      >
        <Input placeholder='Enter reset pin' type='Number'/>
      </Item>

      <Item
        {...tailLayout}
      >
        <Button htmlType="submit" type="primary">Reset password</Button>
      </Item>

      <Item
        {...tailLayout}
      >
        <a href='/' className='text-cyan-400 underline'>Login</a>
      </Item>
    </Form>
  </>
  )
}

export default PasswordResetCodeForm
