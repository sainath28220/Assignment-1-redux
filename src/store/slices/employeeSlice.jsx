import { createSlice } from '@reduxjs/toolkit';
import { fetchEmployees } from '../thunks/fetchEmployees';
import { addEmployee } from '../thunks/addEmployee';
import { removeEmployee } from '../thunks/removeEmployee';


const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder){
    builder.addCase(fetchEmployees.pending,(state,action) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchEmployees.rejected,(state,action)=>{
      state.isLoading = false;
      state.error = action.error;
    }),
    builder.addCase(fetchEmployees.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.data = action.payload;
    }),
    builder.addCase(addEmployee.pending,(state,action)=>{
      state.isLoading = true;
    }),
    builder.addCase(addEmployee.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.data.push(action.data);
      console.log(state.data,"state")
    }),
    builder.addCase(addEmployee.rejected,(state,action)=>{
      state.isLoading = false;
      state.error = action.error;
    }),
    builder.addCase(removeEmployee.pending,(state,action)=>{
      state.isLoading = true;
    }),
    builder.addCase(removeEmployee.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.data = state.data.filter(employee => employee.id !== action.payload.id);
    }),
    builder.addCase(removeEmployee.rejected,(state,action)=>{
      state.isLoading = false;
      state.error = action.error;
    })
  }
})


export const employeeReducer = employeeSlice.reducer;