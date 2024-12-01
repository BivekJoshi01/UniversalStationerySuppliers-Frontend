import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => <div>Dashboard Content</div>;
const Item = () => <div>Settings Content</div>;
const Order = () => <div>Profile Content</div>;
const NotFound = () => <div>No Page Found</div>;

const AdminContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get("active");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Item":
        return <Item />;
      case "Order":
        return <Order />;
      default:
        return <NotFound />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default AdminContent;
