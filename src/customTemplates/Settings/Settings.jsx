import { Grid, IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleDarkMode } from "../../redux/Slice/darkModeSlice";
import { Fade } from "@mui/material";
import { toast } from "react-toastify";

const Settings = ({ handleOpenDrawer }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    dispatch(toogleDarkMode(newMode));
    toast.success(`Switched to ${newMode} mode`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        // alignItems: "end",
        width: "30px",
      }}
    >
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenDrawer}
        color="inherit"
      >
        {/* <MenuIcon />s */}
        sac{" "}
      </IconButton>
      <IconButton
        onClick={handleModeChange}
        sx={{ transition: "transform 0.3s ease" }}
      >
        <Fade in={mode === "light"} timeout={500}>
          <Brightness7 sx={{ transition: "opacity 0.5s ease" }} />
        </Fade>
        <Fade in={mode === "dark"} timeout={500}>
          <Brightness4 sx={{ transition: "opacity 0.5s ease" }} />
        </Fade>
      </IconButton>
      <Grid>dscasxasx</Grid>
    </div>
  );
};

export default Settings;
