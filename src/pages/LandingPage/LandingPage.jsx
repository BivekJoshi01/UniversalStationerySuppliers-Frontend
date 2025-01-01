import React from "react";
import SliderScroll from "./InitialAnimate/SliderScroll";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    // <SliderScroll/>
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div
        style={{
          flex: "0 0 auto",
          position: "fixed",
          width: "100%",
          zIndex: 100,
        }}
      >
        ascasc
      </div>
      <div
        style={{
          flex: "1 0 auto",
          marginTop: "60px",
        }}
      >
        scasxax
      </div>
      <div style={{ flex: "0 0 auto" }}>
        <Footer style={{ position: "sticky", bottom: "0", zIndex: "100" }} />
      </div>
    </div>
  );
};

export default LandingPage;
