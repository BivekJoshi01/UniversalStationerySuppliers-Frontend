import {
  Button,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleDarkMode } from "../../redux/Slice/darkModeSlice";
import { Fade } from "@mui/material";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";
import LightSwitch from "../../assets/Icons/LightSwitch.png";
import DarkSwitch from "../../assets/Icons/DarkSwitch.png";

const Settings = ({ handleOpenDrawer }) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
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
        flexDirection: "column",
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 5%, ${theme.palette.tertiary.main} 115%)`,
        justifyContent: "space-between",
        width: "60px",
        height: "90vh",
        overflow: "hidden",
        margin: "1rem",
        zIndex: 9999,
        borderRadius: "16px",
      }}
    >
      {isMdScreen ? (
        <Button onClick={handleOpenDrawer} color="inherit">
          <MenuIcon />
        </Button>
      ) : (
        <Button></Button>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onClick={handleModeChange}
          sx={{ transition: "transform 0.3s ease", padding: "6px" }}
        >
          {mode === "light" ? (
            <Fade in={mode === "light"} timeout={500}>
              <img
                src={LightSwitch}
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "opacity 0.5s ease",
                }}
              />
            </Fade>
          ) : (
            <Fade in={mode === "dark"} timeout={500}>
              <img
                src={DarkSwitch}
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "opacity 0.5s ease",
                }}
              />
            </Fade>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Settings;
