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

const PasswordResetEmailForm = ({ setIsVisible }) => {

  const onFinish = (data) => {
    try {
    //Make API call
    console.log(data);
    setIsVisible(false)
    } catch (error) {
    message.error("Something went wrong !",2)
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
        <Typography.Text className='w-full flex justify-center pb-8'>Enter your registered email id and enter the password reset pin on next page</Typography.Text>
        <Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email"
            }
          ]}
          hasFeedback
        >
          <Input placeholder='Enter email' />
        </Item>

        <Item
          {...tailLayout}
        >
          <Button htmlType="submit" type="primary">Next</Button>
        </Item>

        <Item
          {...tailLayout}
        >
          <a href='#' className='text-cyan-400 underline'>Login</a>
        </Item>
      </Form>
    </>
  )
}

export default PasswordResetEmailForm
