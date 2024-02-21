import { createBrowserRouter } from "react-router-dom";

import { Path } from "./Path";

import AppLayout from "layouts/AppLayout";
import Employees from "pages/Employees";
import EmployeeDetail from "pages/EmployeeDetail";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: Path.HOME,
        element: <Employees />,
      },
      {
        path: Path.EMPLOYEES,
        element: <Employees />,
      },
      {
        path: Path.EMPLOYEE_DETAIL,
        element: <EmployeeDetail />,
      },
    ],
  },
]);
