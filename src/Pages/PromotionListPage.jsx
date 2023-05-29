import axios from "axios";
import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

const PromotionListPage = () => {
  const { restaurantList } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={restaurantList}>
          {(restaurantList) => (
            <ul>
              {restaurantList.map((list) => (
                <li key={list._id}>
                  {list.restaurantName} and {list.description}
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </>
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
    console.log(response.data);
    return response.data;
  }
};

export const loader = () => {
  return defer({
    restaurantList: loadRestaurants(),
  });
};
