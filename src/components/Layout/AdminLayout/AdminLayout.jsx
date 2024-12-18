import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  SpeedDial,
  SpeedDialAction,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../../customTemplates/SideBar/SideBar";
import CustomBreadCrumps from "../../../customTemplates/BreadCrumps/CustomBreadCrumps";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { toogleDarkMode } from "../../../redux/Slice/darkModeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import CompanyLogo from "../../../assets/CompanyIDAssets/UniversalLogo.jpeg";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";

const AdminLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    dispatch(toogleDarkMode(newMode));
    toast.success(`Switched to ${newMode} mode`);
  };

  const handleChangePassword = () => {
    navigate(`change-password`);
  };

  const actions = [
    {
      icon: <DarkModeIcon />,
      name: "Change Mode                                                                         ",
      onClick: handleModeChange,
    },
    {
      icon: <LockPersonRoundedIcon />,
      name: "Change Password",
      onClick: handleChangePassword,
    },
    {
      icon: <>zsx</>,
      name: "Print",
      onClick: () => console.log("Print action triggered"),
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        {!isMdScreen && (
          <Box
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              width: "298px",
            }}
          >
            <div
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "100%" }}>
                <Grid
                  container
                  alignItems="center"
                  sx={{ padding: "1rem", display: "flex", gap: "1rem" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography variant="h6">Welcome, </Typography>
                </Grid>
                <Divider />
                <SideBar handleCloseDrawer={handleCloseDrawer} />
              </div>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Button variant="outlined" fullWidth startIcon={<LogoutIcon />}>
                  Logout
                </Button>
                <Divider />
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src={CompanyLogo}
                      alt="Logo Here"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <Typography>Universal Stationery Suppliers</Typography>
                </div>
              </div>
            </div>
          </Box>
        )}

        {/* Main content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              padding: isMdScreen ? "1rem" : "1rem 2rem 2rem 2rem",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            <CustomBreadCrumps handleOpenDrawer={handleOpenDrawer} />

            <div style={{ marginTop: "3rem" }}>
              <Outlet />
            </div>
          </Box>
        </Box>

        {/* Drawer for mobile screens */}
        {isMdScreen && (
          <Drawer
            open={openDrawer}
            anchor="left"
            onClose={handleCloseDrawer}
            PaperProps={{
              sx: { width: "280px" },
            }}
          >
            <Grid
              container
              alignItems="center"
              sx={{ gap: "0.6rem", marginBottom: "1rem", padding: "12px" }}
            >
              <Typography variant="h6">Welcome</Typography>
            </Grid>
            <SideBar handleCloseDrawer={handleCloseDrawer} />
            <Box
              sx={{
                position: "absolute",
                bottom: "3rem",
                right: "1rem",
              }}
            >
              <Button
                onClick={handleCloseDrawer}
                color="primary"
                variant="contained"
              >
                <ArrowBack />
              </Button>
            </Box>
          </Drawer>
        )}
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          textAlign: "center",
          padding: "6px",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Universal Stationery Suppliers. All
          rights reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SettingsRoundedIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default AdminLayout;
