import axios from "axios";

const api = axios.create({
  baseURL: "https://cygapi.herokuapp.com/api"
  // baseURL: "http://localhost:3001/api"
});

axios.defaults.headers.common = {
  Authorization: "Bearer " + localStorage.jwtToken
};

export const getAllComments = () => api.get("/comments");
export const getAllCoupons = () => api.get("/coupons");
export const getCoupon = theID => api.get(`/getCoupon/${theID}`);
export const postCouponComment = content => api.post("/aComment", content);
// The user REVIEWR Login-Register post()
export const postRegister = usrData => api.post("/user/register", usrData);
export const postLogin = usrData => api.post("/user/login", usrData);
export const getReviewerAuth = theID => api.get(`/revAuth/${theID}`);
export const addThisScan = theId => api.post(`/addScan/${theId}`);

const apis = {
  getAllComments,
  getAllCoupons,
  getCoupon,
  postCouponComment,
  postRegister,
  postLogin,
  getReviewerAuth,
  addThisScan
};

// baseURL: "http://localhost:3000/api"
export default apis;
