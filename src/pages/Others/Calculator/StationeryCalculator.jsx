import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@mui/material";

const StationeryCalculator = () => {
  const [expression, setExpression] = useState(""); // For main calculation
  const [vat, setVat] = useState(""); // VAT percentage
  const [discount, setDiscount] = useState(""); // Discount percentage
  const [baseAmount, setBaseAmount] = useState(null); // Base amount from expression
  const [vatAmount, setVatAmount] = useState(null); // Calculated VAT amount
  const [discountAmount, setDiscountAmount] = useState(null); // Calculated Discount amount
  const [finalAmount, setFinalAmount] = useState(null); // Final calculated amount

  // Combined calculation handler
  const handleCalculate = () => {
    try {
      // Evaluate the main expression
      const evalResult = Function(`"use strict"; return (${expression})`)();
      setBaseAmount(evalResult);

      // Proceed with VAT and Discount calculations
      const vatValue = (evalResult * parseFloat(vat)) / 100 || 0;
      const discountValue = (evalResult * parseFloat(discount)) / 100 || 0;
      const finalValue = evalResult + vatValue - discountValue;

      setVatAmount(vatValue);
      setDiscountAmount(discountValue);
      setFinalAmount(finalValue);
    } catch (error) {
      // Handle invalid input
      setBaseAmount("Error");
      setVatAmount(null);
      setDiscountAmount(null);
      setFinalAmount(null);
    }
  };

  // Clear all fields
  const handleClear = () => {
    setExpression("");
    setVat("");
    setDiscount("");
    setBaseAmount(null);
    setVatAmount(null);
    setDiscountAmount(null);
    setFinalAmount(null);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ fontWeight:900 }} gutterBottom>
          Stationery Calculator
        </Typography>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Enter Calculation (e.g., 100 + 200 * 3)"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Type your expression"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="VAT %"
            value={vat}
            onChange={(e) => setVat(e.target.value)}
            placeholder="Enter VAT percentage"
            type="number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Discount %"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter Discount percentage"
            type="number"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "end", gap: "1rem" }}
        >
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear Fields
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Results:
          </Typography>
          {baseAmount !== null && (
            <Typography>Base Amount: {baseAmount}</Typography>
          )}
          {vatAmount !== null && (
            <Typography>VAT Amount: {vatAmount}</Typography>
          )}
          {discountAmount !== null && (
            <Typography>Discount Amount: {discountAmount}</Typography>
          )}
          {finalAmount !== null && (
            <Typography>Final Amount: {finalAmount}</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StationeryCalculator;
