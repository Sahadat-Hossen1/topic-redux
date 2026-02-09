import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  GetEmployees } from "../features/employees/employeesSlice";

export default function Employees() {
  const { isLoading, isError, error, employees } = useSelector(
    (state) => state.employees,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetEmployees());
  }, [dispatch]);
//handle modal
const handleModal=(employeeID)=>{
  alert(`you clicked on employee with id: ${employeeID}`)
}

 // 🔄 Loading state
  if (isLoading && !isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-semibold text-blue-600 animate-pulse">
          Loading employees...
        </p>
      </div>
    );
  }

  // ❌ Error state
  if (!isLoading && isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-600 font-semibold">
          ❌ {error}
        </p>
      </div>
    );
  }

  // 📭 Empty state
  if (!isLoading && !isError && employees.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">
          No employees found
        </p>
      </div>
    );
  }

  // ✅ Success state
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Employees
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div 
            key={employee.id}
            onClick={() => handleModal(employee.id)}
            className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {employee.name}
            </h2>

            <p className="text-gray-600">
              <span className="font-medium">Department:</span>{" "}
              {employee.department}
            </p>

            <p className="text-gray-600">
              <span className="font-medium">Position:</span>{" "}
              {employee.position}
            </p>

            <p className="mt-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  employee.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {employee.isActive ? "Present" : "Absent"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
