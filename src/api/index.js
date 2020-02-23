import axios from "axios";

const api = axios.create({
    baseURL: "https://cygapi.herokuapp.com/api"
  // baseURL: "http://localhost:3001/api"
});

export const getAllComments = () => api.get("/comments");
export const getAllCoupons = () => api.get("/coupons");
export const getCoupon = theID => api.get(`/getCoupon/${theID}`);
export const postCouponComment = content => api.post('/aComment', content);
const apis = {
  getAllComments,
  getAllCoupons,
  getCoupon,
  postCouponComment
};

// baseURL: "http://localhost:3000/api"
export default apis;
