import { Typography } from "@mui/material";
import React from "react";

const PromotionItemDetail = (props) => {
  const { item } = props;

  return (
    <>
      <Typography>{item.restaurantName}</Typography>
      <Typography>{item.description}</Typography>
      <Typography>{item.webpage}</Typography>
      <Typography>{item.businessHour.monday.startTime}</Typography>
      <Typography>{item.address.streetName}</Typography>
    </>
  );
};

export default PromotionItemDetail;
