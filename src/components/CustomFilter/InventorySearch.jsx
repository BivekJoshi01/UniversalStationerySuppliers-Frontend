import { 
    Box, 
    Button, 
    Typography, 
    useTheme, 
    IconButton, 
    Collapse 
  } from "@mui/material";
  import React, { useState } from "react";
  import FilterListIcon from "@mui/icons-material/FilterList";
  import FilterListOffIcon from "@mui/icons-material/FilterListOff";
  
  const InventorySearch = ({ filterFormik }) => {
    const theme = useTheme();
    const [showFields, setShowFields] = useState(false);
  
    return (
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          padding: "1rem",
          borderRadius: "6px",
     
        }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.default,
              fontWeight: 700,
            }}
          >
            Filter
          </Typography>
          <IconButton onClick={() => setShowFields((prev) => !prev)}>
            {showFields ? <FilterListOffIcon /> : <FilterListIcon />}
          </IconButton>
        </Box>
        <Collapse in={showFields}>
          <Box>
            {/* <RenderInput inputField={inputField} formik={filterFormik} /> */}
            {/* Uncomment below for the search button */}
            {/* 
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                onClick={() => filterFormik.handleSubmit()}
                variant="outlined"
                sx={{ marginTop: "1rem" }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </div> 
            */}
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
            <h1>cxsax</h1>
          </Box>
        </Collapse>
      </div>
    );
  };
  
  export default InventorySearch;
  