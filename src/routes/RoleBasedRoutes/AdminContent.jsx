import React from "react";
import { useLocation } from "react-router-dom";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard/AdminDashborad";

const Dashboard = () => <AdminDashboard />;
const Item = ({ subTab }) => (
  <div>Settings Content for {subTab || "Default"}</div>
);
const Order = () => <div>Profile Content</div>;
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
      case "Dashboard":
        return <Dashboard />;
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
