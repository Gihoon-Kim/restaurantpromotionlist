import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PromotionListPage = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const getList = async () => {
      const res = await axios.get("http://localhost:8080/api/promotion-list");
      setList(res.data);
    };
    getList();
  }, []);

  return (
    <>
      <Link to={"/"}>Go to HomePage</Link>
      {list && (
        <ul>
          {list.map((item) => (
            <li key={item._id}>{item.Name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PromotionListPage;
