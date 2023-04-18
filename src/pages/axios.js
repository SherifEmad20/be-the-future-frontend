import axios from "axios";

const token = localStorage.getItem("accessToken");
  const api = axios.create({
    baseURL: "http://ai-era-backend.herokuapp.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export {api}
