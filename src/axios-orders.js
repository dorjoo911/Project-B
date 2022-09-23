import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-3d6a9-default-rtdb.firebaseio.com/",
});

export default instance;
