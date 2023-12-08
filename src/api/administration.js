import api from "./http-common";

// POST Request

export const createAccount = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createUser  = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createUserRole = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};
