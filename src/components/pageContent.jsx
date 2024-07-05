import React,{useState} from 'react'

import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'
import Projects from '../pages/Projects'


const PageContent = () => {

  const [userData, setUserData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <div className='flex flex-col w-full h-full p-4'>
      {/* <Dashboard data={{employees,projects}}/> */}
      <Employees employees={employees} setEmployees={setEmployees}  />
      {/* <Projects projects={projects} setProjects={setProjects}/> */}
    </div>
  )
}

export default PageContent
