import axios from "axios";

export const login = async (loginData) => {
  let response;
  try {
    response = await axios.post("url", loginData);
    return response;
  } catch (error) {
    return error;
  }
};

export const signup = async (signupData) => {
  let response;
  try {
    response = await axios.post("url", signupData);
    return response;
  } catch (error) {
    return error;
  }
};

export const subscribe = async (subscribeData) => {
  let response;
  try {
    response = await axios.post("url", subscribeData);
    return response;
  } catch (error) {
    return error;
  }
};
