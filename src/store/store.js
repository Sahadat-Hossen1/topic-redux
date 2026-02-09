import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import employeesReducer from "../features/employees/employeesSlice"
export default configureStore({
    reducer:{
        counters:counterReducer,
        employees:employeesReducer,
    },
})