import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {

  const { user,logOut } = useAuth();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });

    instance.interceptors.response.use(res=>{
      return res
    },err =>{
      const status = err.status
      if(status === 401 || status === 403){
        console.log("Logged out for bad request")
        logOut()
        .then(()=>{
          
        })
      }
    })
    
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };

  }, [user]);
  return instance;
};
export default useAxiosSecure;
