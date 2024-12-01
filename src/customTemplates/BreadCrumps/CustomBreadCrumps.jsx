import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const CustomBreadCrumps = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mainTab = queryParams.get("active");
  const subTab = queryParams.get("subTab");

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Home
      </Link>

      {mainTab && (
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate(`/admin?active=${mainTab}`)}
          style={{ cursor: "pointer" }}
        >
          {mainTab}
        </Link>
      )}

      {subTab && <Typography color="text.primary">{subTab}</Typography>}
    </Breadcrumbs>
  );
};

export default CustomBreadCrumps;
