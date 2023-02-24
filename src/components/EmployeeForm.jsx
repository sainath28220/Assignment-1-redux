import { useEffect,useState } from 'react';
import { fetchEmployees } from '../store';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import SearchEmployee from './SearchEmployee';
import FilteredList from './FilteredList';
import RenderForm from './RenderForm'

const EmployeeForm = () => {
  const [ doFetchEmployees, isLoadingEmployees, loadingEmployeesError ] = useThunk(fetchEmployees);
  const [ addUser,setAddUser ] = useState(false);
  
  const fetchEmployeesList = () => {
    doFetchEmployees();
  };
  
  const handleUser = () => {
    setAddUser(prevShow => !prevShow)
  }


  return(
    <div>
    <div className='flex flex-row justify-between items-center m-3'>
      <h1>Manage Employee</h1>
      <Button onClick={handleUser}>Add User</Button>
    </div>
    {addUser && <RenderForm />}
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