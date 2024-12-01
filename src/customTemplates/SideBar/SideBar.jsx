import React from "react";
import { Box, Tab, useTheme, Collapse } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate, useLocation } from "react-router-dom";
import { adminTab } from "./sideTab";

const SideBar = ({ handleCloseDrawer }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const defaultMainTab = queryParams.get("active") || "dashboard";
  const defaultSubTab = queryParams.get("subTab") || "";

  const [mainTab, setMainTab] = React.useState(defaultMainTab);
  const [subTab, setSubTab] = React.useState(defaultSubTab);
  const [openSubTabs, setOpenSubTabs] = React.useState(defaultMainTab);

  const user = "ADMIN"; // Mock user role
  const roleTabsMap = {
    ADMIN: adminTab,
    // Other roles can be added here
  };

  const userTabs = roleTabsMap[user] || [];
  const selectedTab = userTabs.find((tab) => tab.value === mainTab);
  const subTabs = selectedTab?.subTabs || [];

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
    setSubTab(""); // Reset subTab
    setOpenSubTabs((prev) => (prev === newValue ? "" : newValue));
    navigate(`?active=${newValue}`); // Update URL
    window.scrollTo(0, 0);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
    navigate(`?active=${mainTab}&subTab=${newValue}`); // Update URL
    window.scrollTo(0, 0);
    handleCloseDrawer(); // Close the drawer if applicable
  };

  const labelStyle = {
    textTransform: "none",
    justifyContent: "flex-start",
    minHeight: "50px",
    fontSize: "15px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    width: "100%",
    "&:hover": {
      color: theme.palette.primary.main,
      borderLeft: `6px solid ${theme.palette.primary.main}`,
    },
  };

  const activeLabelStyle = {
    ...labelStyle,
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.primary.main,
    borderLeft: `6px solid ${theme.palette.primary.main}`,
  };

  return (
    <Box>
      <TabContext value={mainTab}>
        <TabPanel value={mainTab} sx={{ padding: "0" }}>
          <TabList
            onChange={handleMainTabChange}
            orientation="vertical"
            indicatorColor="none"
          >
            {userTabs.map((tab) => (
              <React.Fragment key={tab.value}>
                <Tab
                  label={
                    <Box display="flex" alignItems="center" width="100%">
                      {tab.label}
                      {tab.subTabs?.length > 0 && (
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
                  icon={tab.icon}
                  value={tab.value}
                  sx={mainTab === tab.value ? activeLabelStyle : labelStyle}
                  iconPosition="start"
                  onClick={() => handleMainTabChange(null, tab.value)}
                />
                {tab.subTabs?.length > 0 && (
                  <Collapse in={openSubTabs === tab.value}>
                    <TabContext value={subTab}>
                      <TabPanel value={subTab} sx={{ padding: "0" }}>
                        <TabList
                          onChange={handleSubTabChange}
                          orientation="vertical"
                          indicatorColor="none"
                        >
                          {tab.subTabs.map((subTabItem) => (
                            <Tab
                              key={subTabItem.value}
                              label={subTabItem.label}
                              icon={subTabItem.icon}
                              value={subTabItem.value}
                              sx={
                                subTab === subTabItem.value
                                  ? activeLabelStyle
                                  : { ...labelStyle, ml: 2, fontSize: "14px" }
                              }
                              iconPosition="start"
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
    </Box>
  );
};

export default SideBar;
