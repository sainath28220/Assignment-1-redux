import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeEmployee = createAsyncThunk('employee/remove',async(employee) => {
  const response  = await axios.delete(`http://localhost:3005/employees/${employee.id}`);
  return employee;
})

export { removeEmployee };