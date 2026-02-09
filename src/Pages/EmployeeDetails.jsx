import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteEmployees, EditEmployee, Employee } from "../features/employees/employeesSlice";

export default function EmployeeDetails() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const {employee } = useSelector(
    (state) => state.employees,
  );
  // console.log(employee);

  const dispatch = useDispatch();

  const [readyToEdit, setReadyToEdit] = useState(false);

  //
  const [employeeFrom, setEmployeeFrom] = useState({
    name: "",
    position: "",
    department: "",
    isActive: true,
  });
  //
  useEffect(() => {
    dispatch(Employee(employeeId));
  }, [dispatch, employeeId]);
  //
  useEffect(() => {
    if (employee) {
      setEmployeeFrom({
        name: employee.name || "",
        position: employee.position || "",
        department: employee.department || "",
        isActive: true,
      });
    }
  }, [employee]);

  
//
  const handleChange = (e) => {
    const {name,value,type,checked}=e.target;
    setEmployeeFrom((prev)=>({
      ...prev,[name]:type === "checkbox" ? checked:value,
    }))
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditEmployee({employeeId,editedEmployeesData:employeeFrom,}))
    navigate(-1)
  };
  //
  const handleCancel = () => {
    navigate(-1);
  };
const handleDelete=(employeeId)=>{
  // console.log(employeeId);
  
  dispatch(DeleteEmployees(employeeId))
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Employee Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={employeeFrom.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={employeeFrom.position}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={employeeFrom.department}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Active Status
            </label>
            <input
              type="checkbox"
              name="isActive"
              checked={employeeFrom.isActive}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {readyToEdit ? (
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg
                       font-semibold hover:bg-blue-700 transition duration-200"
              >
                Save Changes
              </button>
              <button
                className="w-full bg-black text-white py-2 rounded-lg
                       font-semibold hover:bg-gray-700 transition duration-200"
                onClick={handleCancel}
              >
                {" "}
                cancel
              </button>
            </div>
          ) : (
           <div className="flex flex-col gap-1">
             <button
              onClick={() => setReadyToEdit(true)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg
                       font-semibold hover:bg-blue-700 transition duration-200"
            >
              Edit Details
            </button>
            <button onClick={()=>handleDelete(employee.id)} className=" w-full bg-red-800 text-black py-2 rounded-lg font-semibold hover:bg-red-200 transition duration-200">
              Delete
            </button>
           </div>
          )}
        </form>
      </div>
    </div>
  );
}
