import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addEmployee = createAsyncThunk('employee/add',async(employee)=>{
  const response = await axios.post('http://localhost:3005/employees',employee);
  return response.data
})

export { addEmployee }