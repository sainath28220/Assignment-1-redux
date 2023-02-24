import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './slices/employeeSlice';

const store = configureStore({
  reducer:{
    employees: employeeReducer
  }
})


export {store}
export * from './thunks/fetchEmployees';
export * from './thunks/addEmployee';
export * from './thunks/removeEmployee';
export * from './thunks/editEmployee';

