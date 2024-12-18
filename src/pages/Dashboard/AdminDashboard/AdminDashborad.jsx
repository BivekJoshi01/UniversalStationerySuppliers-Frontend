import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Inventory,
  ShoppingCart,
  AttachMoney,
  People,
  Edit,
  Delete,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StationeryCalculator from "../../Others/Calculator/StationeryCalculator";

const AdminDashboard = () => {
  // Sample data for the chart
  const salesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 700 },
    { month: "May", sales: 600 },
    { month: "Jun", sales: 800 },
  ];

  return (
    <Box sx={{width:"100%"}}>
      {/* Summary Cards */}
      <Grid container spacing={3}>
        {[
          {
            title: "Total Inventory",
            value: "3,200",
            icon: <Inventory />,
            color: "primary.main",
          },
          {
            title: "Total Orders",
            value: "120",
            icon: <ShoppingCart />,
            color: "secondary.main",
          },
          {
            title: "Revenue",
            value: "$15,800",
            icon: <AttachMoney />,
            color: "success.main",
          },
          {
            title: "Customers",
            value: "450",
            icon: <People />,
            color: "error.main",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: item.color, margin: 2 }}>{item.icon}</Avatar>
              <CardContent>
                <Typography variant="h6" noWrap>
                  {item.title}
                </Typography>
                <Typography variant="h4">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sales Chart */}
      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        Monthly Sales Overview
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ height: { xs: 250, sm: 300 }, width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        Inventory List
      </Typography>
      {/* <TableContainer component={Paper} sx={{ overflowX: "auto",width:"100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { name: "Notebook", category: "Books", stock: 150, price: "$1.50" },
              { name: "Pen", category: "Writing", stock: 500, price: "$0.75" },
              { name: "Eraser", category: "Accessories", stock: 200, price: "$0.50" },
            ].map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {/* Quick Actions */}
      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        Quick Actions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Button variant="contained" color="primary">
          Add New Item
        </Button>
        <Button variant="outlined" color="secondary">
          Generate Report
        </Button>
        <Button variant="contained" color="success">
          Update Stock
        </Button>
      </Box>
      <br/>
      <StationeryCalculator/>
    </Box>
  );
};

export default AdminDashboard;
