import React from "react";
import CTA from "../../assets/Landing/CTA.png";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          margin: {
            xs: "1rem",
            sm: "1rem",
            md: "1rem 6rem",
            lg: "1rem 8rem",
          },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { md: "380px", sm: "300px", xs: "200px" },
            position: "relative",
          }}
        >
          <img
            src={CTA}
            style={{ width: "100%", height: "100%" }}
            alt="Call to Action"
          />
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Your Text Here
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
