import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function EmployeeTableRow ({ elem, setEmployee, setShowEditForm, newEmployee, setNewEmployee }) {

  const handleEditBtn = e =>{
    setShowEditForm(true);
    setEmployee(elem);
  }

  const handleFireEmployee = e => {
    e.target.parentElement.parentElement.style.color='red';
    e.target.parentElement.parentElement.style.textDecoration='line-through';
    newEmployee.isFired=true;
  }

  const handleDeleteEmployee = e => {
    if(window.confirm('Are you sure you want to delete this employee?')) {
      const filteredEmp = newEmployee.filter((emp)=> emp.id != elem.id);
      setNewEmployee(filteredEmp);
    }
  }


  return (
    <tr>
        <td>{elem.name}</td>
        <td>{elem.age}</td>
        <td>{elem.salary}</td>
        <td><button onClick={handleEditBtn}>edit</button></td>
        <td><button onClick={handleFireEmployee}>fire</button></td>
        <td><button onClick={handleDeleteEmployee}>delete</button></td>
    </tr>
  )
}

EmployeeTableRow.propTypes = {
  elem: PropTypes.object,
  setEmployee: PropTypes.func,
  setShowEditForm: PropTypes.func,
  newEmployee: PropTypes.array,
  setNewEmployee: PropTypes.func
};

export default EmployeeTableRow