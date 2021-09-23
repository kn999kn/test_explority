import React from "react";
import CardMaterial from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export const Card = ({ children }) => {
  return (
    <CardMaterial>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>{children} </CardContent>
      </Box>
    </CardMaterial>
  );
};
