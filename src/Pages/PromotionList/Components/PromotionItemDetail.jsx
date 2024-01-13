import { Paper, Typography } from "@mui/material";
import React from "react";

const PromotionItemDetail = (props) => {
  const { item } = props;

  return (
    <Paper elevation={12}>
      <Typography variant="h2" gutterBottom>
        {item.restaurantName}
      </Typography>
      <Typography>{item.description}</Typography>
      <Typography>{item.webpage}</Typography>
      <Typography>{item.businessHour.monday.startTime}</Typography>
      <Typography>{item.address.streetName}</Typography>
    </Paper>
  );
};

export default PromotionItemDetail;
