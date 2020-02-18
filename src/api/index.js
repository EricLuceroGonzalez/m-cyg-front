import axios from "axios";

const api = axios.create({
    baseURL: "https://cygapi.herokuapp.com/api/v1/sites/"
  // baseURL: "http://localhost:3000/api"
});

export const getAllComments = () => api.get("/comments");
export const getAllCoupons = () => api.get("/coupons");
export const getCoupon = theID => api.get(`/getCoupon/${theID}`);
const apis = {
  getAllComments,
  getAllCoupons,
  getCoupon
};

// baseURL: "http://localhost:3000/api"
export default apis;
