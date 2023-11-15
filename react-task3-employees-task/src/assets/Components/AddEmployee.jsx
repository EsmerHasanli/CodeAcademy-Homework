import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; 


function AddEmployee({ newEmployee, setNewEmployee }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && age && salary) {
      const employee = {
        id: uuidv4(),
        name,
        age,
        salary,
        isFired: false,
        createdAt: Date.now(),
      };

      console.log(employee);

      setNewEmployee([...newEmployee, employee]);

      setName('');
      setAge('');
      setSalary('');

      setShowForm(false);
    } else {
      alert('You need to fill all inputs');
    }
  };

  const handleCancel = () => {
    setName('');
    setAge('');
    setSalary('');

    setShowForm(false);
  };


  return (
    <>
      <button onClick={handleAddEmployeeClick}>Add Employee</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Add Employee:</h2>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
          <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="age" />
          <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="salary" />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </>
  );
}

AddEmployee.propTypes = {
  newEmployee: PropTypes.array,
  setNewEmployee: PropTypes.func
};

export default AddEmployee;
