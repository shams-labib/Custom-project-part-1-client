import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Firebase/AuthContext";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useInstance = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Interceptor setup
    const interceptor = instance.interceptors.request.use(async (config) => {
      if (user) {
        // Firebase er token pawa
        const token = await user.getIdToken();
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Cleanup: interceptor remove
    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]); // user change hole interceptor update hobe

  return instance;
};

export default useInstance;
