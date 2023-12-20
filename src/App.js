import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homeapage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import About from "./Pages/Aboutus/About";
import Addemployee from "./Pages/Addemployee/Addemployee";
import HrApp from "./Pages/dashboard/HrApp";
import Department from "./Pages/Departments/Departments";
import AllEmployee from "./Pages/AllEmployee/Allemployee";
import DisplayEmpbyDep from "./Pages/AllEmployee/Displaybydepartment/DisplayEmpbyDep";
import EmployeeDetails from "./Pages/Employeedetails/EmployeeDetails";
import Editemployee from "./Pages/Editemployee/Editemployee";
import Leaveform from "./Pages/LeavePPage/Leaveform";
import ManageEmployee from "./Pages/AllEmployee/Manage/ManageEmployee"
import Employeeattrition from "./Pages/Attrition/EmployeeAttrition";
import Negativeattrition from "./Pages/Attrition/Attritionstate/NegativeAttriton";
import Positiveattrition from "./Pages/Attrition/Attritionstate/PositiveAttrition";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/aboutus"} element={<About />} />
              <Route path={"/Addemployee"} element={<Addemployee />} />
              <Route path={"/dashboard"} element={<HrApp />} />
              <Route path={"/department"} element={<Department />} />
              <Route path={"/AllEmployee"} element={<AllEmployee />} />
              <Route path={"/departmentEmployee/:department"} element={<DisplayEmpbyDep />} />
              <Route path={"/Employeedetails/:id"} element={<EmployeeDetails />} />
              <Route path={"/editemployee/:id"} element={<Editemployee />} />

              <Route path={"/leave"} element={<Leaveform />} />
              <Route path={"/Manage/:id"} element={<ManageEmployee />} />
              <Route path={"/Attrition"} element={<Employeeattrition />} />
              <Route path={"/PositiveAttrition"} element={<Positiveattrition />} />
              <Route path={"/NegativeAttrition"} element={<Negativeattrition />} />

              


            </Routes>
          </BrowserRouter>


    </div>
  );
}

export default App;
