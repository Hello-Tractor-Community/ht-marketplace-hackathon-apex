import { axiosInstance, handleError } from "./utils";

export const getOperator = async (operatorId) => {
  const url = `operators/${operatorId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getOperators = async (params) => {
  const url = "operators/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createOperator = async (payload) => {
  const url = "operators/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateOperator = async (operatorId, payload) => {
  const url = `operators/${operatorId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteOperator = async (operatorId) => {
  const url = `operators/${operatorId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};
