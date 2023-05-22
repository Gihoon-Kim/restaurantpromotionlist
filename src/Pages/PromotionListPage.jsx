import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PromotionListPage = () => {
  useEffect(() => {
    const getAds = async () => {
      const res = await axios.get("http://localhost:8080/api/promotion-list");
      console.log(res.data);
    };
    getAds();
  }, []);

  return <Link to={"/"}>Go to HomePage</Link>;
};

export default PromotionListPage;
