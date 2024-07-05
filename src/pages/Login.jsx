import React from 'react';
import { Form, message, Input, Button, Modal, Typography, Space, DatePicker } from 'antd'
const { Item } = Form;

const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 8 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 12 }, lg: { span: 12 } }
}
const tailLayout = {
    wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 12, offset: 8 } }
};

const Login = () => {

    const onFinish = (data) => {
        console.log(data);
    }
    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-300'>
            <Form
                {...layout}
                className='bg-white w-8/12 lg:w-6/12 py-20 lg:py-8 px-8 lg:px-0 bg-blue-500 rounded-md'
                name='loginForm'
                onFinish={onFinish}
            >
                <Typography.Title level={2} className='w-full flex justify-center text-lg font-bold pb-8'>Login Page</Typography.Title>
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
                >
                    <Input placeholder='Enter email' />
                </Item>
                <Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input.Password placeholder='Enter password'  />
                </Item>

                <Item
                    {...tailLayout}
                >
                    <Button htmlType="submit" type="primary">Login</Button>
                </Item>

                <Item
                    {...tailLayout}
                >
                    <a href='#' className='text-cyan-400 underline'>forgot password?</a>
                </Item>
            </Form>
        </div>
    )
}

export default Login
