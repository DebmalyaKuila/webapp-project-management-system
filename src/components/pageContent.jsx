import React,{useState} from 'react'

import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'
import Projects from '../pages/Projects'
import Clients from '../pages/Clients'


const PageContent = () => {

  const [userData, setUserData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  return (
    <div className='flex flex-col w-full h-full p-4'>
      {/* <Dashboard data={{employees,projects}}/> */}
      {/* <Employees employees={employees} setEmployees={setEmployees}  /> */}
      {/* <Projects projects={projects} setProjects={setProjects}/> */}
       <Clients clients={clients} setClients={setClients}/>
    </div>
  )
}

export default PageContent
