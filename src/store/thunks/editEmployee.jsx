import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const editEmployee = createAsyncThunk('employee/edit',async(employee)=>{
  const response = await axios.patch(`http://localhost:3005/employees/${employee.id}`,employee);
  return employee
})

export { editEmployee };