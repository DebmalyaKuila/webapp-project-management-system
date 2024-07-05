import React,{useState} from 'react'
import { Layout } from 'antd';
const { Content  } = Layout;

import NavBar from './NavBar.jsx';
import MainHeader from './MainHeader.jsx';
import PageContent from './pageContent.jsx';

const DefaultLayout = ({children}) => {

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
              <PageContent children={children}/>
             </Content>
         </Layout>
        </Layout>
       </>
    )
  }

export default DefaultLayout
