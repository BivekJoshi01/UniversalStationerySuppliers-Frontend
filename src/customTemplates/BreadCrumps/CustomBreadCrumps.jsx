import React from "react";
import { Breadcrumbs, Link, Typography, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useTheme } from "@emotion/react";

const CustomBreadCrumps = ({ handleOpenDrawer }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mainTab = queryParams.get("active");
  const subTab = queryParams.get("subTab");

  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          position: "fixed",
          padding: "0.5rem 3rem 0.5rem 0.2rem",
          borderRadius: "8px",
        }}
      >
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
      </div>

      {isMdScreen && (
        <div
          onClick={handleOpenDrawer}
          role="button"
          style={{
            border: "1px solid",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            padding: "2px 6px",
            position: "fixed",
            right: 10,
            top:20
          }}
          onKeyDown={(e) => e.key === "Enter" && handleOpenDrawer()}
        >
          <MenuRoundedIcon style={{ fontSize: "24px" }} />
        </div>
      )}
    </div>
  );
};

export default CustomBreadCrumps;
