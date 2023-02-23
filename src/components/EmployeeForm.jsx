import { useEffect,useState } from 'react';
import { fetchEmployees,addEmployee } from '../store';
import { useDispatch,useSelector } from 'react-redux'
import { useThunk } from '../hooks/use-thunk';
import Button from './Button'

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

  const { data } = useSelector((state) => {
    return state.employees
  });

  const renderEmployees = data.map(emp=>{
    return(
      <div className="mb-2 border rounded" key={emp.id}>
        <div className="flex p-2 justify-between items-center">
          <div className="flex flex-row item-center justify-between">
            <button>Delete</button>
            <div>{emp.id}</div>
          </div>
        </div>
      </div>
    )
  })



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
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">EmployeeID</h1>
        <h1 className="m-2 text-xl">Employee Name</h1>
        <h1 className="m-2 text-xl">Employee Department</h1>
        <Button loading={isLoadingEmployees} onClick={fetchEmployeesList}>Show Employees</Button>
      </div>
    </div>
  </div>
  )
}

export default EmployeeForm