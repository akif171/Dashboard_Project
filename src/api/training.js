import api from "./http-common";

// POST Request

export const createClasses = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createFaculty = async (data) => {
    let response;
  
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };