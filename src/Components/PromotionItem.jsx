import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

const PromotionItem = (props) => {
  const { item, onClick } = props;

  const onCardClick = () => {
    onClick(item);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }} onClick={onCardClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.restaurantName}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PromotionItem;
