import { authEndpoints } from "@/helpers/constants";
import axios from "axios";

/* If you need to send some kind of auth token on all api calls expect the onces in "authEndPoints" */
// axios.interceptors.request.use(async (config) => {
//     if (authEndpoints.some((e) => config.url?.endsWith(e))) {
//       return config;
//     }
  
//     if (config.headers) {
//       config.headers["Authorization"] = `Bearer ${"someToken"}`;
//     }
  
//     if (TOKEN.isInvalid || TOKEN.isExpired) {
//       window.location.href = "/logout";
//     }
  
//     return config;
//   });

  /* If you get a 403 or 401 user gets logged out */
  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response && (error.response.status === 403 || error.response.status === 401)) {
  //       TOKEN.clear();
  //       window.location.replace("/login");
  //     }
  //     console.error(error);
  //     return Promise.reject(error);
  //   }
  // );
  