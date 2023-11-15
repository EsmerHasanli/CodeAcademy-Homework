import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import EmployeeTableRow from './EmployeeTableRow.jsx'

function EmployeeTable ({ newEmployee, setNewEmployee , ShowEditForm ,setShowEditForm, employee, setEmployee}) {
  return (
    <>
        <h1>Employees:</h1>
        <table style={{ border: 3, bordercolor: "black" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Edit</th>
                    <th>Fire</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    newEmployee && newEmployee.map(((elem, idx)=>{
                        return <EmployeeTableRow employee={employee} setEmployee={setEmployee} ShowEditForm={ShowEditForm} setShowEditForm={setShowEditForm} key={idx}  elem={elem} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    }))
                }
            </tbody>
        </table>
        <h5>Employees average salary: <span> </span></h5>
    </>
  )
}

EmployeeTableRow.propTypes = {
    newEmployee: PropTypes.array,
    setNewEmployee: PropTypes.func,
    ShowEditForm : PropTypes.bool,
    setShowEditForm: PropTypes.func,
    elem: PropTypes.object,
    setEmployee: PropTypes.func
  };

export default EmployeeTable