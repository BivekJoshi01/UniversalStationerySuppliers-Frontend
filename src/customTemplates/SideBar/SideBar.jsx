import React, { useEffect } from "react";
import { Box, Tab, useTheme, Collapse } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate, useLocation } from "react-router-dom";
import { adminTab } from "./sideTab";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";

const SideBar = ({ handleCloseDrawer }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const defaultHeadTab = queryParams.get("headTab") || "menu";
  const defaultMainTab = queryParams.get("active") || "Dashboard";
  const defaultSubTab = queryParams.get("subTab") || "";

  const [headTab, setHeadTab] = React.useState(defaultHeadTab);
  const [mainTab, setMainTab] = React.useState(defaultMainTab);
  const [subTab, setSubTab] = React.useState(defaultSubTab);
  const [openSubTabs, setOpenSubTabs] = React.useState(defaultMainTab);

  const user = "ADMIN";

  const roleTabsMap = {
    ADMIN: adminTab,
    // Add other roles if needed
  };

  const userTabs = roleTabsMap[user][headTab] || [];

  useEffect(() => {
    setHeadTab(defaultHeadTab);
    setMainTab(defaultMainTab);
    setSubTab(defaultSubTab);
    setOpenSubTabs(defaultMainTab);
  }, [defaultHeadTab, defaultMainTab, defaultSubTab]);

  const handleHeadTabChange = (event, newValue) => {
    setHeadTab(newValue);
    setMainTab("");
    setSubTab("");
    setOpenSubTabs("");
    const url = `?headTab=${newValue}&active=${mainTab}`;
    const fullUrl = subTab ? `${url}&subTab=${subTab}` : url;

    navigate(fullUrl);
  };

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
    setSubTab("");
    setOpenSubTabs((prev) => (prev === newValue ? "" : newValue));
    navigate(`?headTab=${headTab}&active=${newValue}`);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
    navigate(`?headTab=${headTab}&active=${mainTab}&subTab=${newValue}`);
    handleCloseDrawer();
  };

  const labelStyle = {
    textTransform: "none",
    justifyContent: "flex-start",
    minHeight: "50px",
    fontSize: "15px",
    fontWeight: 700,
    // display: "flex",
    // alignItems: "center",
    width: "100%",
    "&:hover": {
      color: theme.palette.primary.main,
      borderLeft: `6px solid ${theme.palette.primary.main}`,
    },
  };

  const activeLabelStyle = {
    ...labelStyle,
    background: `linear-gradient(135deg, ${theme.palette.background.alt} 70%, ${theme.palette.secondary.main} 130%)`,
    color: theme.palette.text.main,
    fontWeight: 400,
    borderLeftWidth: "6px",
    borderLeftStyle: "solid",
    borderImage: `linear-gradient(135deg, ${theme.palette.primary.main} 5%, ${theme.palette.secondary.main} 15%) 1`,
  };

  const tabHeadStyle = {
    minWidth: "2rem",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 900,
    "&:hover": {
      background: theme.palette.background.alt,
      cursor: "pointer",
      borderRadius: "10px",
    },
  };
  const activeTabHeadStyle = {
    borderLeft: `2px solid #6c63ff`,
    borderRight: `2px solid #6c63ff`,
    borderRadius: "10px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 700,
    minWidth: "0px",
    color: "#333333",
    padding: "8px 16px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <Box sx={{ margin: "6px 0" }}>
      <TabContext value={headTab}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <TabList
            onChange={handleHeadTabChange}
            aria-label="Main tabs"
            indicatorColor="none"
          >
            <Tab
              label="Menu"
              value="menu"
              sx={headTab === "menu" ? activeTabHeadStyle : tabHeadStyle}
            />
            <Tab
              icon={<SettingsRoundedIcon />}
              value="setting"
              sx={headTab === "setting" ? activeTabHeadStyle : tabHeadStyle}
            />
            <Tab
              icon={<AssessmentRoundedIcon />}
              value="analytics"
              sx={headTab === "analytics" ? activeTabHeadStyle : tabHeadStyle}
            />
            <Tab
              icon={<BuildRoundedIcon />}
              value="others"
              sx={headTab === "others" ? activeTabHeadStyle : tabHeadStyle}
            />
          </TabList>
        </Box>
        <TabPanel value={headTab} sx={{ padding: "0" }}>
          <TabContext value={mainTab}>
            <TabPanel value={mainTab} sx={{ padding: "0" }}>
              <TabList
                onChange={handleMainTabChange}
                orientation="vertical"
                indicatorColor="none"
              >
                {userTabs?.map((tab, index) => (
                  <React.Fragment key={tab.value}>
                    <Tab
                      label={
                        <Box
                          display="flex"
                          alignItems="center"
                          width="100%"
                          sx={{ gap: "0.5rem" }}
                        >
                          {tab?.icon}
                          {tab?.label}
                          {tab?.subTabs?.length > 0 && (
                            <Box ml="auto">
                              {openSubTabs === tab.value ? (
                                <ExpandLessIcon />
                              ) : (
                                <ExpandMoreIcon />
                              )}
                            </Box>
                          )}
                        </Box>
                      }
                      value={tab?.value}
                      sx={mainTab === tab.value ? activeLabelStyle : labelStyle}
                      onClick={() => handleMainTabChange(null, tab.value)}
                    />
                    {tab?.subTabs?.length > 0 && (
                      <Collapse in={openSubTabs === tab.value}>
                        <TabContext value={subTab} sx={{ display: "flex" }}>
                          <TabPanel value={subTab} sx={{ padding: "0" }}>
                            <TabList
                              onChange={handleSubTabChange}
                              orientation="vertical"
                              indicatorColor="none"
                            >
                              {tab.subTabs.map((subTabItem) => (
                                <Tab
                                  key={subTabItem?.value}
                                  label={
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      width="100%"
                                      sx={{ gap: "0.5rem", marginLeft: "3rem" }}
                                    >
                                      {subTabItem?.icon}
                                      {subTabItem?.label}
                                    </Box>
                                  }
                                  value={subTabItem?.value}
                                  sx={
                                    subTab === subTabItem?.value
                                      ? activeLabelStyle
                                      : {
                                          ...labelStyle,
                                          fontSize: "14px",
                                          justifyContent: "flex-start",
                                        }
                                  }
                                />
                              ))}
                            </TabList>
                          </TabPanel>
                        </TabContext>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </TabList>
            </TabPanel>
          </TabContext>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default SideBar;
