import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleDarkMode } from "../../redux/Slice/darkModeSlice";
import { Fade } from "@mui/material";
import { toast } from "react-toastify";

const Settings = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    dispatch(toogleDarkMode(newMode));
    toast.success(`Switched to ${newMode} mode`);
  };

  return (
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
  );
};

export default Settings;
