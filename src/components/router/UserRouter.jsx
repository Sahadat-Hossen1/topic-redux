import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Counter from "../../Pages/Counter";
import TasksManegment from "../../Pages/TasksManegment";
import Employees from "../../Pages/Employees";
import AddEmployee from "../../Pages/AddEmployees";
import EmployeeDetails from "../../Pages/EmployeeDetails";

export const UserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/counter",
        element: <Counter />,
      },
      // {
      //   path: "/tasks",
      //   element: <TasksManegment />,
      // },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/employees/:employeeId",
        element: <EmployeeDetails />,
      },
      {
        path: "/add-employees",
        element: <AddEmployee />,
      },
    ],
  },
]);
