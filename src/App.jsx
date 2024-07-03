import React,{useState}  from 'react'
import './App.css'
import { Layout } from 'antd';
const {  Sider, Content ,Footer } = Layout;

import NavBar from './components/NavBar.jsx';
import MainHeader from './components/MainHeader.jsx';
import PageContent from './components/pageContent.jsx';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout hasSider>
        <NavBar toggleCollapsed={toggleCollapsed} collapsed={collapsed}/>
        <Layout className='h-screen'>
          <MainHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
          <Content className='grow overflow-auto min-h-4'>
           <PageContent/>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
