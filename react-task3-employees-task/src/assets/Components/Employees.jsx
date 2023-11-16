import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import EmployeeTable from './EmployeeTable.jsx';
import AddEmployee from './AddEmployee.jsx';
import EditEmployee from './EditEmployee.jsx';


function Employees () {
  const [newEmployee, setNewEmployee] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [employee, setEmployee] = useState({});


  useEffect(()=>{
    const allEmp = newEmployee.map((emp)=> emp.id == employee.id ? employee : emp);
    setNewEmployee(allEmp);
  },[employee, setNewEmployee]);


  const handleSortByAge = () => {
    const filteredByAge = [...newEmployee].sort((a, b) => Number(a.age) - Number(b.age));
    setNewEmployee(filteredByAge);
    console.log(filteredByAge);
  };

  const handleSortBySalary = () => {
    const filteredBySalary = [...newEmployee].sort((a, b) => Number(a.salary) - Number(b.salary));
    setNewEmployee(filteredBySalary);
    console.log(filteredBySalary);
  };

  const handleSortByDate = () => {
    const filteredByDate = [...newEmployee].sort((a, b) => a.createdAt - b.createdAt);
    setNewEmployee(filteredByDate);
    console.log(filteredByDate);
  };

  const handleCalculateAvg = () => {
    const calculateAvg = [...newEmployee].map((x) => Number(x.salary)).reduce((accumulator, currentSalary) => accumulator + currentSalary, 0);
    console.log(calculateAvg);
  };

  return (
    <>
        <EmployeeTable employee={employee} setEmployee={setEmployee} showEditForm={showEditForm} setShowEditForm={setShowEditForm} newEmployee={newEmployee} setNewEmployee={setNewEmployee}/>
        <AddEmployee newEmployee={newEmployee} setNewEmployee={setNewEmployee}/> 
        {
          showEditForm && <EditEmployee employee={employee} setEmployee={setEmployee} setShowEditForm={setShowEditForm}/>
        }
        <button onClick={handleSortByAge}>sort by age</button>
        <button onClick={handleSortBySalary}>sort by salary</button>
        <button onClick={handleSortByDate}>sort by date</button>
        <button onClick={handleCalculateAvg}>calculate average salary</button>
    </>
  )
}

export default Employees