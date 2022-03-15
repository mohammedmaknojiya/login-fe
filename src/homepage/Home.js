import React from "react";
import axios from "axios";

const Home = () => {
  const getSchData = async () => {
    const token = JSON.parse(localStorage.getItem("authToken"));

    const result = await axios.get("http://localhost:3001/sch/data", {
      headers: {
        Authorization: `Bearer ${token}`,
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
