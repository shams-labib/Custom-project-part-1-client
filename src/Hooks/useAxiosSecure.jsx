import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer AccessToken`;
    return config;
  });

  return instance;
};

export default useAxiosSecure;
