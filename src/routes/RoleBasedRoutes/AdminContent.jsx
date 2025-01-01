import React, { lazy } from "react";
import { useLocation } from "react-router-dom";
import Loadable from "../../components/Loader/Loadable";
import InventorySearch from "../../components/CustomFilter/InventorySearch";
import ChangePassword from "../../pages/Auth/ChangePassword/ChangePassword";
import ViewProfile from "../../pages/Profile/ViewProfile/ViewProfile";
import EditProfile from "../../pages/Profile/EditProfile/EditProfile";

const AdminDashboard = Loadable(
  lazy(() => import("../../pages/Dashboard/AdminDashboard/AdminDashborad"))
);

const Item = ({ subTab }) => (
  <div>Settings Content for {subTab || "Default"}</div>
);
const Order = () => <InventorySearch />;
const Waiter = () => <div>Waiter Profile Content</div>;
const Cashier = () => <div>Cashier Profile Content</div>;

const NotFound = () => <div>No Page Found</div>;

const AdminContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("active");
  const subTab = queryParams.get("subTab");

  const renderContent = () => {
    switch (activeTab) {
      /*----------------------------------PROFILE------------------------------------------------------------*/
      case "Profile":
        return <ViewProfile />;
      case "Update Profile":
        return <EditProfile />;
      case "Change Password":
        return <ChangePassword />;

      /*----------------------------------MENU------------------------------------------------------------*/
      case "Dashboard":
        return <AdminDashboard />;
      /*----------------------------------SETTING------------------------------------------------------------*/
      /*----------------------------------ANALYTICS------------------------------------------------------------*/
      /*----------------------------------OTHERS------------------------------------------------------------*/

      case "Item":
        if (subTab === "Waiter") {
          return <Waiter />;
        } else if (subTab === "Cashier") {
          return <Cashier />;
        }
        return <Item subTab={subTab} />;
      case "Order":
        return <Order />;
      default:
        return <NotFound />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default AdminContent;
