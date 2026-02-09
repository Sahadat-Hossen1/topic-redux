import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddEmployees } from "../features/employees/employeesSlice";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const nameRef = useRef(null);
  const departmentRef = useRef(null);
  const positionRef = useRef(null);
  const statusRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      name: nameRef.current.value,
      department: departmentRef.current.value,
      position: positionRef.current.value,
      isActive: statusRef.current.value === "true",
    };
     dispatch(AddEmployees(employeeData))
    navigate("/employees")
    e.target.reset()
    // console.log("Employee Data 👉", employeeData);

    // later: dispatch(addEmployee(employeeData))
    // or: api call
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Employee
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employee Name
          </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter full name"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <input
            ref={departmentRef}
            type="text"
            placeholder="e.g. IT"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            ref={positionRef}
            type="text"
            placeholder="e.g. Frontend Developer"
            className="w-full border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            ref={statusRef}
            className="w-full border rounded-lg px-4 py-2"
            required
          >
            <option value="">Select status</option>
            <option value="true">Present</option>
            <option value="false">Absent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}
