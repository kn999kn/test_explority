import React from "react";
import CardMaterial from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const styles = {
  cardContentWrapper: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
  },
  cardContent: { flex: "1 0 auto" },
};

export const Card = ({ children }) => {
  return (
    <CardMaterial variant="outlined">
      <Box sx={styles.cardContentWrapper}>
        <CardContent sx={styles.cardContent}>{children} </CardContent>
      </Box>
    </CardMaterial>
  );
};
