import api from "./http-common";

// POST Request

export const createJobLead = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createSalesInterview = async (data) => {
    let response;
  
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };
