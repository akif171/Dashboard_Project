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


  export const createJobInterview = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };

  export const createInterview = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };

  export const createProject = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };



  export const createTraining = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };

  export const createDocment = async (data) => {
    let response;
    try {
      response = await api.post("endpoint", data);
      return response;
    } catch (error) {
      return error;
    }
  };