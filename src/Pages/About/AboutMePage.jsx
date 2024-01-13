import React from "react";
import MyPhoto from "../../assets/images/MyPhoto.jpg";
import { Container, Typography } from "@mui/material";
import styles from "./AboutMePage.module.css";

const AboutMePage = () => {
  return (
    <Container className={styles.container}>
      <Container style={{ display: "flex", alignItems: "baseline" }}>
        <img className={styles.profileImage} src={MyPhoto} alt="" />
        <Typography className={styles.typography} variant="h3">
          Hoony Kim
        </Typography>
      </Container>
      <Typography>Hi My name is Hoony Kim.</Typography> <br />
      <Typography>
        In these days, it is not hard to hear voice of people that the price of
        eat-out are extremely high. I cannot change the markey economics, but I
        wanted to help people to save money.
      </Typography>
      <br />
      <Typography>
        I have thought what I can do for people and this is the solution of me.
        There are a lot of promotions in restaurants but people usually do not
        know. Especially, in Toronto, there are many different diversities, so
        it is hard to get information of promotions of restaurants which other
        diversities owned. So I determined to gather these kinds of information
        such as which restaurants have their own promotions to eat cheaper to
        users.
      </Typography>
      <br />
      <Typography>
        I considered this determine is not good for owners of restaurants or
        not, but if many users uses this application and owners update their
        promotions, it occurs effects of advertisements. So I believe this is
        not bad offer to owners of restaurants
      </Typography>
      <br />
      <Typography>
        I am South-Korean and living in GTA. I graduated Computer Programming
        Analyst course of Seneca College. Nowadays, I am working on KPMG as
        full-stack developer.
      </Typography>
    </Container>
  );
};

export default AboutMePage;
