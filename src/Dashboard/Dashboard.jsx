import React from "react";
import { FaHome } from "react-icons/fa";
import { FaList, FaUsers } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { PiPerson } from "react-icons/pi";
import { useRole } from "../Hooks/useRole";

const Dashboard = () => {
  const [role] = useRole();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-1 md:gap-2 py-2">
        {/* this is left side menubar */}
        <div className="col-span-1 md:col-span-2 bg-violet-50 font-medium min-h-screen">
          <div>
            <ul className="menu p-5 font-medium text-lg">
              {role === "admin" && (
                <>
                  <li>
                    <Link to="/dashboard/adminHome">
                      <FaHome></FaHome>
                      Admin Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/users">
                      <FaUsers></FaUsers>
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/patients">
                      <PiPerson></PiPerson>
                      Manage Doctors
                    </Link>
                  </li>
                </>
              )}

              {role === "user" && (
                <>
                  <li>
                    <Link to="/dashboard/workerHome">
                      <FaHome></FaHome>
                      User Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/taskLists">
                      <FaList></FaList>
                      Doctor List
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="divider">OR</div>
          <div className="menu p-5 font-medium text-lg">
            <li>
              <Link to="/">
                <IoMenu></IoMenu>
                Back to Home
              </Link>
            </li>
          </div>
        </div>
        {/* right side menu items */}
        <div className="col-span-1 md:col-span-7 bg-gray-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
