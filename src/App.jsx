import React  from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DefaultLayout from "./components/DefaultLayout.jsx"

import Login from './pages/Login.jsx';
import PasswordReset from './pages/PasswordReset.jsx';
import Dashboard from "./pages/Dashboard.jsx"
import Employees from "./pages/Employees.jsx"
import Projects from './pages/Projects.jsx';
import Clients from './pages/Clients.jsx';
import Invoices from "./pages/Invoices.jsx"

function App() {

  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/reset-password' element={<PasswordReset />} />
                <Route path='/dashboard' element={<DefaultLayout><Dashboard/></DefaultLayout>} />
                <Route path='/employees' element={<DefaultLayout><Employees/></DefaultLayout>} />
                <Route path='/projects' element={<DefaultLayout><Projects/></DefaultLayout>} />
                <Route path='/clients' element={<DefaultLayout><Clients/></DefaultLayout>} />
                <Route path='/invoices' element={<DefaultLayout><Invoices/></DefaultLayout>} />
            </Routes>
    </Router>
    // <Login/>
    // <PasswordReset/>
    // <div>
    //   <Layout hasSider>
    //     <NavBar toggleCollapsed={toggleCollapsed} collapsed={collapsed}/>
    //     <Layout className='h-screen'>
    //       <MainHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
    //       <Content className='grow overflow-auto min-h-4'>
    //        <PageContent/>
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </div>
  )
}




export default App
