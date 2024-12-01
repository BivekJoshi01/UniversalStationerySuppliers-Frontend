import {
  Box,
  Button,
  Drawer,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import React from "react";
import { Outlet } from "react-router-dom";
// import LoggedNavbar from "../Navbar/LoggedNavbar";
import SideBar from "../../../customTemplates/SideBar/SideBar";
import CustomBreadCrumps from "../../../customTemplates/BreadCrumps/CustomBreadCrumps";
import Settings from "../../../customTemplates/Settings/Settings";

const AdminLayout = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* <LoggedNavbar handleOpenDrawer={handleOpenDrawer} /> */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        {!isMdScreen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: theme.palette.background.default,
              width: "298px",
              boxSizing: "border-box",
            }}
          >
            <Grid container alignItems="center" sx={{ padding: "1rem" }}>
              <Typography variant="h6">Welcome</Typography>
            </Grid>
            <SideBar handleCloseDrawer={handleCloseDrawer} />
          </Box>
        )}

        <Box
          sx={{
            flexGrow: 1,
            width: isMdScreen ? "100%" : `calc(100% - 298px)`,
            // padding: isMdScreen ? "1rem" : "2rem",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ padding: isMdScreen ? "1rem" : "1rem 2rem 2rem 2rem" }}>
            <CustomBreadCrumps />
            <div style={{ marginTop: "1rem" }}>
              <Outlet />
            </div>
          </Box>

          <Settings handleOpenDrawer={handleOpenDrawer} />
        </Box>

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
      </Box>
    </Box>
  );
};

export default AdminLayout;
