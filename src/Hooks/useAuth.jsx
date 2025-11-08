import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useIntance = () => {
  return instance;
};

export default useIntance;
