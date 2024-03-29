import axios from "axios";
import React, { Suspense, useState } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import PromotionItem from "./Components/PromotionItem";
import { Container, Typography } from "@mui/material";
import PromotionItemDetail from "./Components/PromotionItemDetail";
import classes from "./PromotionListPage.module.css";

const PromotionListPage = () => {
  const { restaurantList } = useLoaderData();

  const [item, setItem] = useState(null);

  const onClick = (item) => {
    setItem(item);
  };

  return (
    <Container className={classes.container}>
      <Suspense fallback={<p className={classes.loading_text}>Loading...</p>}>
        <div className={classes.list_detail_container}>
          {/* left side */}
          <div className={classes.list_leftside}>
            <Await resolve={restaurantList}>
              {(restaurantList) =>
                restaurantList.map((item) => (
                  <PromotionItem key={item._id} item={item} onClick={onClick} />
                ))
              }
            </Await>
          </div>

          {/* right side */}
          <Container>
            {item ? (
              <PromotionItemDetail item={item} />
            ) : (
              <Typography>Please select an item on left board</Typography>
            )}
          </Container>
        </div>
      </Suspense>
    </Container>
  );
};

export default PromotionListPage;

const loadRestaurants = async () => {
  const response = await axios.get("http://localhost:8080/api/promotion-list");

  if (response.statusText !== "OK") {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    return response.data;
  }
};

export const loader = () => {
  return defer({
    restaurantList: loadRestaurants(),
  });
};
