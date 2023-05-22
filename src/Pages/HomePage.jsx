import React from "react";
import Button from "@mui/material/Button";
import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const _navigateToListPage = (event) => {
    event.preventDefault();

    navigate("promotion-list");
  };

  return (
    <div className={style.container}>
      <Button variant="outlined" onClick={_navigateToListPage}>
        Go to List
      </Button>
    </div>
  );
};

export default HomePage;
