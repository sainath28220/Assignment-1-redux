import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const fetchEmployees = createAsyncThunk('employee/fetch',async()=>{
  const response = await axios.get('http://localhost:3005/employees');

  return response.data
})



export {fetchEmployees}