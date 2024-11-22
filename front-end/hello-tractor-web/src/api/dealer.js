import { axiosInstance, handleError } from "./utils";


export const getDealer = async (dealerId) => {
  const url = `dealers/${dealerId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getDealers = async (params) => {
  const url = "dealers/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createDealer = async (payload) => {
  const url = "dealers/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateDealer = async (dealerId, payload) => {
  const url = `dealers/${dealerId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteDealer = async (dealerId) => {
  const url = `dealers/${dealerId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};