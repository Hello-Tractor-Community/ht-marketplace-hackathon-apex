import { axiosInstance, handleError } from "./utils";

export const getBuyer = async (buyerId) => {
  const url = `buyers/${buyerId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getBuyers = async (params) => {
  const url = "buyers/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createBuyer = async (payload) => {
  const url = "buyers/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateBuyer = async (buyerId, payload) => {
  const url = `buyers/${buyerId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteBuyer = async (buyerId) => {
  const url = `buyers/${buyerId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};
