import { Outlet } from "react-router";
import Sidebar from "../../layouts/admin/Sidebar";

const Admin = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-72 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
