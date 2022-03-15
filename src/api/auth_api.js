import axios from "axios";

export const loginUser = async (data) => {
  const userData = await axios.post("http://localhost:3001/auth/login", {
    ...data,
  });
  return userData;
};

export const signUpUser = async (data) => {
  const userData = await axios.post("http://localhost:3001/auth/signup", {
    ...data,
  });
  return userData;
};
