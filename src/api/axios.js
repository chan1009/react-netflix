import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3ae3b271da40b018316dbf9a81c58827",
    language: "ko-KR",
  },
});

export default instance;
