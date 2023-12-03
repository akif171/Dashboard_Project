import api from "./http-common";

// POST Request

export const createCandidate = async (data) => {
  let response;

  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createMarketingHistory = async (data) => {
  let response;
  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createNote = async (data) => {
  let response;
  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createMarketingList = async (data) => {
  let response;
  try {
    response = await api.post("endpoint", data);
    return response;
  } catch (error) {
    return error;
  }
};


export const createMarketingJob = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };