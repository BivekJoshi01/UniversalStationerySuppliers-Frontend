import { nanoid } from "nanoid";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import BatchPredictionRoundedIcon from "@mui/icons-material/BatchPredictionRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import FaceRetouchingNaturalRoundedIcon from "@mui/icons-material/FaceRetouchingNaturalRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import WcRoundedIcon from "@mui/icons-material/WcRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CoffeeMakerRoundedIcon from "@mui/icons-material/CoffeeMakerRounded";
import TableRowsIcon from "@mui/icons-material/TableRows";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RedeemRoundedIcon from "@mui/icons-material/RedeemRounded";
import DnsIcon from "@mui/icons-material/Dns";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";

export const adminTab = {
  menu: [
    { label: "Dashboard", value: "Dashboard", icon: <BatchPredictionIcon /> },
    {
      label: "Item",
      value: "Item",
      icon: <BatchPredictionIcon />,
      subTabs: [
        { label: "Cashier", value: "Cashier", icon: <BatchPredictionIcon /> },
        { label: "Barista", value: "Barista", icon: <BatchPredictionIcon /> },
        { label: "Waiter", value: "Waiter", icon: <BatchPredictionIcon /> },
      ],
    },
    { label: "Order", value: "Order", icon: <BatchPredictionIcon /> },
  ],
  setting: [
    { label: "Settings", value: "Settings" },
    {
      label: "Management",
      value: "Management",
      subTabs: [
        { label: "Roles", value: "Roles" },
        { label: "Permissions", value: "Permissions" },
      ],
    },
  ],
  analytics: [
    { label: "Reports", value: "Reports" },
    { label: "Analytics", value: "Analytics" },
  ],
  others: [
    { label: "Reports", value: "Reports" },
    { label: "Analytics", value: "Analytics" },
  ],
  profile: [
    { label: "Profile", value: "Profile" },
    // { label: "Update Profile", value: "UpdateProfile" },
    { label: "Change Password", value: "Change Password" },
  ],
};
