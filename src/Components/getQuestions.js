import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../api";

const CouponQuestions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = theID => {
      api
        .getCoupon(theID)
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          setData(err);
        });
    };
    fetchData("5e4b35cd121e0c1a1bc620df");
  }, []);

  return <div>{data._id}</div>;
};

export default CouponQuestions;
