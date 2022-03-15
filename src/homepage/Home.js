import React from "react";
import axios from "axios";
import { useAuth } from "../authContext/AuthContext";

const Home = () => {
  const auth = useAuth();
  const getSchData = async () => {
    const result = await axios.get("http://localhost:3001/sch/data", {
      headers: {
        Authorization: `Bearer ${auth.authToken}`,
      },
    });
    console.log(result);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => getSchData()}>get data</button>
    </div>
  );
};

export default Home;
