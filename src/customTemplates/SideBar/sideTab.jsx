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

export const adminTab = [
  { label: "Dashboard", value: "Dashboard" },
  // { label: "Customer", value: "customer" },
  { label: "Order", value: "Order" },
  {
    label: "Item",
    value: "Item",
    subTabs: [
      {
        // id: nanoid(),
        label: "Cashier",
        value: "Cashier",
        // icon: <CurrencyExchangeRoundedIcon />,
      },
      {
        // id: nanoid(),
        label: "Barista",
        value: "Barista",
        // icon: <CoffeeMakerRoundedIcon />,
      },
      {
        // id: nanoid(),
        label: "Waiter",
        value: "Waiter",
        // icon: <WcRoundedIcon />,
      },
    ],
  },
];
