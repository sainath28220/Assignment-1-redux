import { useEffect,useState } from 'react';
import { fetchEmployees,addEmployee } from '../store';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import SearchEmployee from './SearchEmployee';
import FilteredList from './FilteredList';

const EmployeeForm = () => {
  const [ doFetchEmployees, isLoadingEmployees, loadingEmployeesError ] = useThunk(fetchEmployees);
  const [ doAddEmployee, isAddingEmployee, creatingEmployee ] = useThunk(addEmployee)
  const dispatch = useDispatch();
  const [ code,setCode ] = useState('');
  const [ name, setName ] = useState('');
  const  [ department,setDepartment ] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    doAddEmployee({ code,name,department,'id': code });
    setCode("");
    setName('')
    setDepartment('')
  };

  
  const fetchEmployeesList = () => {
    doFetchEmployees();
  };
  
  const handleUser = () => {
    setShowForm(prevShow => !prevShow)
  }


  return(<div>
    <div>
      <h1>Manage Employee</h1>
      <button onClick={handleUser}>Add User</button>
    </div>
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
    <div className='border-4 border-indigo-500/50 p-2 mt-6'>
      <SearchEmployee />
    </div>
    <div>
        <div className="flex flex-row justify-between items-center m-3">
          <h1 className="m-2 text-xl">EmployeeID</h1>
          <h1 className="m-2 text-xl">Employee Name</h1>
          <h1 className="m-2 text-xl">Employee Department</h1>
          <Button loading={isLoadingEmployees} onClick={fetchEmployeesList}>Show Employees</Button>
        </div>
        <FilteredList />
    </div>
  </div>
  )
}

export default EmployeeForm