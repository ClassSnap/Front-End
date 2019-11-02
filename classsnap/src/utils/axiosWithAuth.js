import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://class-snap.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
