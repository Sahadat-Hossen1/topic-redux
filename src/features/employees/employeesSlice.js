import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const GetEmployees = createAsyncThunk(
  "employees/GetEmployees",
  async () => {
    const res = await fetch("http://localhost:3000/employees");
    return res.json();
  },
);
export const AddEmployees = createAsyncThunk(
  "employees/AddEmployees",
  async (employeeData) => {
    const res = await fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    return res.json();
  },
);
export const EditEmployee = createAsyncThunk(
  "employees/EditEmployee",
  async (employeeId, editedEmployeesData) => {
    const res = await fetch(`http://localhost:3000/employees/${employeeId}`, {
      mathod: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedEmployeesData),
    });
    return res.json();
  },
);
export const DeleteEmployees = createAsyncThunk(
  "employees/DeleteEmployee",
  async (employeeId) => {
    await fetch(`http://localhost:3000/employees/${employeeId}`, {
      method: "DELETE",
    });
    return employeeId;
  },
);
const initialState = {
  employees: [],
  isLoading: false,
  isError: false,
  error: null,
};
const employeesSlice = createSlice({
  name: "employees",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetEmployees.pending, (state) => {
        ((state.isLoading = true), (state.isError = false));
      })
      .addCase(GetEmployees.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.isError = false),
          (state.employees = action.payload));
      })
      .addCase(GetEmployees.rejected, (state, action) => {
        ((state.isError = true),
          (state.error = action.payload.message || "there is an error"));
      })
      //
      .addCase(AddEmployees.pending, (state) => {
        ((state.isLoading = true), (state.isError = false));
      })
      .addCase(AddEmployees.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.isError = false),
          state.employees.push(action.payload));
      })
      .addCase(AddEmployees.rejected, (state, action) => {
        ((state.isError = true),
          (state.error = action.payload.message || "there is an error"));
      })
      .addCase(EditEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id } = action.payload;
        const index = state.employees.findIndex((emp) => emp.id === id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(EditEmployee.rejected, (state, action) => {
        ((state.isLoading = false),
          (state.isError = true),
          (state.error = action.payload));
      })
      .addCase(DeleteEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        const id = action.payload;
        state.employees = state.employees.filter((emp) => emp.id !== id);
      })
      .addCase(DeleteEmployees.rejected, (state, action) => {
        ((state.isLoading = false),
          (state.isError = true),
          (state.error = action.payload.message || "there is an error"));
      });
  },
});
export default employeesSlice.reducer;
