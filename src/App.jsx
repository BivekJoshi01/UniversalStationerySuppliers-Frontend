import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useSelector } from "react-redux";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const mode = useSelector((state) => state.themeMode.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.background.alt,
          minHeight: "100vh",
          color: theme.palette.text.main,
        }}
      >
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
