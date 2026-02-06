import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Counter from "../../Pages/Counter";
import TasksManegment from "../../Pages/TasksManegment";

export const UserRouter = createBrowserRouter([
    
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:"/counter",
                element:<Counter/>
            },
            {
                path:"/tasks",
                element:<TasksManegment/>
            }]}
        
    ])