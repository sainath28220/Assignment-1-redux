import { nanoid } from '@reduxjs/toolkit';
import { useThunk } from '../hooks/use-thunk';
import { useState } from 'react';
import { addEmployee } from '../store';

const RenderForm = () => {
  const [ code,setCode ] = useState('');
  const [ name, setName ] = useState('');
  const  [ department,setDepartment ] = useState('');
  const [ doAddEmployee, isAddingEmployee, creatingEmployee ] = useThunk(addEmployee)
  
  const formSubmit = (e) => {
    e.preventDefault();
    doAddEmployee({ code,name,department,'id': nanoid() });
    setCode("");
    setName('')
    setDepartment('')
  };

  return(
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor='code'>Employee Code:</label>
          <input value={code} type='text' name='code' id='code' placeholder='Enter Employee Code' onChange={(event) => setCode(event.target.value)} required/><hr/>
        </div>
        <div>
          <label htmlFor='name'>Employee Name:</label>
          <input value={name} type='text'name='name' id='name' placeholder='Enter Your Name' onChange={(event) => setName(event.target.value)} required/><hr/>
        </div>
        <div>
          <label htmlFor='department'>Department: </label>
          <select onChange={(event) => setDepartment(event.target.value)} id='department' required>
              <option>select something</option>
              <option value='Development'>Development</option>
              <option value='Testing'>Testing</option>
              <option value='Human Resource'>Human Resource</option>
            </select><hr/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default RenderForm