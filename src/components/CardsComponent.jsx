import React from 'react'
import { Card, Space, Statistic } from "antd"
const CardsComponent = ({ title, icon, value }) => {
    return (
        <Card
        className='px-6 py-2 flex items-center content-between mx-6' 
        >
            <Space direction='horizontal'>
            {icon}
            <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}

export default CardsComponent
