import { useSelector } from 'react-redux';
import React from 'react';
import Button from './Button'
import { useDispatch } from 'react-redux'
import { removeEmployee } from '../store';

const FilteredList = () => {
  const dispatch = useDispatch();
  const handleDelete = (emploee) => {
    dispatch(removeEmployee(emploee));
  }

  const { data } = useSelector((state) => {
    return state.employees
  });

  const renderEmployees = data.map((emp)=>{
    return(<div className="flex flex-row justify-between items-center m-3" key={emp.id}>
      <h2>{emp.code}</h2>
      <h2>{emp.name}</h2>
      <h2>{emp.department}</h2>
      <Button onClick={() => handleDelete(emp)}>Delete</Button>
      <Button>Edit</Button>
    </div>)
  })

  return(
    <React.Fragment>{renderEmployees}</React.Fragment>
  )
}

export default FilteredList;