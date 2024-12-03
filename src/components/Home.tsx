import React,{useEffect, useState} from "react";
import { httpGet } from "../connection/server";
import { useNavigate } from "react-router-dom";
import { FRONT_URL_DEV } from "../connection/environment";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const auth = async () => {
    try {
      const response:any = await httpGet({ path: "auth/getUserDetails" });
      console.log(response);
      if (response?.data?.statusCode === 200) {
        setUserDetails(response.data.user);
      } 
      else {
        localStorage.clear();
        navigate("/goback");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const currentURL = window.location.href;
    if(!currentURL.includes('token')){
      localStorage.clear();
      navigate("/goback");
      return;
    }
    let token = currentURL?.split("?")[1]?.split("&")[0]?.split('=')[1];
    let username = currentURL?.split("&")[1]?.split('=')[1];
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    auth();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
