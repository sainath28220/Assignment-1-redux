import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Button from './Button'
import { useDispatch } from 'react-redux'
import EditEmployee from './EditEmployee';

const FilteredList = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.employees
  });

  
  const renderEmployees = data.map((emp)=>{
    return(
    <div className="flex flex-row justify-between items-center m-3" key={emp.id}>
      <EditEmployee emp={emp}/>
    </div>)
  })

  return(
    <React.Fragment>{renderEmployees}</React.Fragment>
  )
}

export default FilteredList;