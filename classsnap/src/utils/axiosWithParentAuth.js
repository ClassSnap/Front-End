import axios from "axios";

const axiosWithParentAuth = () => {
  const token = localStorage.getItem("parentToken");
  return axios.create({
    baseURL: "https://class-snap.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithParentAuth;
