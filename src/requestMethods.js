import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = "currentUser?.accessToken";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWI1YTY3NzRlOGNhNzljYjdmYjE0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDk2MDYxMCwiZXhwIjoxNzA1MjE5ODEwfQ.RkxXqJTx_793TLsw_sv51ny8BB6pz7kBCCjjdTtmqWM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
