import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useSelector } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import BackgroundImage from "./assets/Landing/BackGround.svg";

const App = () => {
  const mode = useSelector((state) => state.themeMode.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: `linear-gradient(45deg, ${theme.palette.background.alt} 30%, ${theme.palette.primary.main} 190%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: theme.palette.text.main,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            color: theme.palette.text.main,
          }}
        >
          <AppRoutes />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
