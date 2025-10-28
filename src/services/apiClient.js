import axios from "axios";

const ApiClient = () => {
  const defaultOptions = {
    baseURL: "https://api.jikan.moe/v4/",
  };
// Create instance
  const instance = axios.create(defaultOptions);

// Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("Request failed with error:", error);
      return Promise.reject(error);
    }
  );
// Add a request interceptor
  instance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default ApiClient();
