import React, { useContext, useEffect, useState } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const { userData } = useContext(AuthContext);
  const [employeeData, setEmployeeData] = useState(props.data);

  useEffect(() => {
    // Sync with latest userData from context using email
    const updated = userData?.employees?.find(emp => emp.email === props.data.email);
    if (updated) {
      setEmployeeData(updated);
    }
  }, [userData, props.data]);

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={employeeData} />
        <TaskListNumbers data={employeeData} />
        <TaskList data={employeeData} />
    </div>
  )
}

export default EmployeeDashboard
