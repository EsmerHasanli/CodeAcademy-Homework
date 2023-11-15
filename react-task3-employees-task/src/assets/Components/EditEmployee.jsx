import React, {useState} from 'react';
import PropTypes from 'prop-types';


function EditEmployee ({setShowEditForm, employee, setEmployee}) {
  const [nameValue, setNameValue] = useState(employee.name);
  const [ageValue, setAgeValue ] = useState(employee.age);
  const [salaryValue, setSalaryValue ] = useState(employee.salary);

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    setShowEditForm(false);

    const emp = {
      id: employee.id,
      name: nameValue,
      age:ageValue,
      salary:salaryValue,
      isFired: employee.isFired,
      createdAt: Date.now()
    }

    setEmployee(emp);
  }


  return (
    <>
        <form onSubmit={handleSubmitEdit}>
            <h2>Edit Employee:</h2>
            <input onChange={(e)=> setNameValue(e.target.value)} value={nameValue} type="text" placeholder='name'/>
            <input onChange={(e)=> setAgeValue(e.target.value)} value={ageValue} type="text" placeholder='age'/>
            <input onChange={(e)=> setSalaryValue(e.target.value)} value={salaryValue} type="text" placeholder='salary'/>
            <button>submit</button>
            <button onClick={()=>setShowEditForm(false)} type='button'>cancel</button>
        </form>
    </>
  )
}

EditEmployee.propTypes = {
  setShowEditForm: PropTypes.func,
  employee: PropTypes.object,
  setEmployee: PropTypes.func
};

export default EditEmployee