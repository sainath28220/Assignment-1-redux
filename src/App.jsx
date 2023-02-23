import React, { useEffect, useState } from 'react';
import { fetchEmployees,addEmployee } from './store';
import { useDispatch,useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  const [ code,setCode ] = useState('');
  const [ name, setName ] = useState('');
  const  [ department,setDepartment ] = useState('');
  const [ showForm,setShowForm ] = useState(false);
  const {data} = useSelector((state) => state.employees);
  console.log(data)
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ code,name,department,'id': code }));
    setCode("");
    setName('')
    setDepartment('')
  };

  useEffect(()=>{
    dispatch(fetchEmployees())
  },[fetchEmployees])

  const handleUser = () => {
    setShowForm(prevShow => !prevShow)
  }
  return(<div>
    <div>
      <h1>Manage Employee</h1>
      <button onClick={handleUser}>Add User</button>
    </div>
    {showForm && <div>
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
              <option value='Development'>Development</option>
              <option value='Testing'>Testing</option>
              <option value='Human Resource'>Human Resource</option>
            </select><hr/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>}
  </div>)
};

export default App;