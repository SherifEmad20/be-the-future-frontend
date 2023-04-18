import axios from "axios";

const token = localStorage.getItem("accessToken");
  const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export {api}
