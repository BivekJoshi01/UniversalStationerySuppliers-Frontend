import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../utilities/ScrollToTop";
import AdminLayout from "../components/Layout/AdminLayout/AdminLayout";
import LoginPage from "../pages/Auth/LoginPage/LoginPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import AdminContent from "./RoleBasedRoutes/AdminContent";
import ChangePassword from "../pages/Auth/ChangePassword/ChangePassword";
import ProfileLayout from "../components/Layout/ProfileLayout/ProfileLayout";

const AppRoutes = () => {
  return (
    <HashRouter hashType="slash">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminContent />} />
          </Route>
          <Route path="/profile" element={<ProfileLayout/>}>
            <Route path="" element={<ChangePassword />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
};

export default AppRoutes;
