import { axiosInstance, handleError } from "./utils";

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} email - The email of the user.
 */

/**
 * @typedef {Object} SellerResponse
 * @property {string} id - The unique identifier of the seller.
 * @property {boolean} is_approved - Whether the seller is approved or not.
 * @property {string} created_at - The timestamp when the seller was created.
 * @property {string} updated_at - The timestamp when the seller was last updated.
 * @property {User} user - The user object associated with the seller.
 */

/**
 * @typedef {Object} CreateSellerPayload
 * @property {string} user - The user ID associated with the seller.
 * @property {boolean} [is_approved] - Whether the seller is approved or not.
 */

/**
 * @typedef {Object} UpdateSellerPayload
 * @property {boolean} [is_approved] - Whether the seller is approved or not.
 */

/**
 * Get a seller by ID.
 *
 * @param {string} sellerId - The ID of the seller to retrieve.
 * @returns {Promise<SellerResponse>} A promise resolving to the seller data.
 */
export const getSeller = async (sellerId) => {
  const url = `sellers/${sellerId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Get a list of sellers.
 *
 * @param {Object} params - Optional query parameters.
 * @returns {Promise<SellerResponse[]>} A promise resolving to an array of seller data.
 */
export const getRegisteredSeller = async (params) => {
  const url = "sellers/me";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Get a list of sellers.
 *
 * @param {Object} params - Optional query parameters.
 * @param {number} params.page - The page number.
 * @param {number} params.per_page - The number of sellers per page.
 * @returns {Promise<SellerResponse[]>} A promise resolving to an array of seller data.
 */
export const getSellers = async (params) => {
  const url = "sellers/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Create a new seller.
 *
 * @param {CreateSellerPayload} payload - The seller data to create.
 * @returns {Promise<SellerResponse>} A promise resolving to the created seller data.
 */
export const createSeller = async (payload) => {
  const url = "sellers/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Update an existing seller.
 *
 * @param {string} sellerId - The ID of the seller to update.
 * @param {UpdateSellerPayload} payload - The updated seller data.
 * @returns {Promise<SellerResponse>} A promise resolving to the updated seller data.
 */
export const updateSeller = async (sellerId, payload) => {
  const url = `sellers/${sellerId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Delete a seller.
 *
 * @param {string} sellerId - The ID of the seller to delete.
 * @returns {Promise<void>} A promise resolving to indicate the deletion was successful.
 */
export const deleteSeller = async (sellerId) => {
  const url = `sellers/${sellerId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Seller reviews
export const getSellerReview = async (sellerId) => {
  const url = `sellers/${sellerId}/reviews/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getSellerReviews = async (params) => {
  const url = "sellers/reviews/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createSellerReview = async (sellerId, payload) => {
  const url = `sellers/${sellerId}/reviews/`;
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateSellerReview = async (sellerId, payload) => {
  const url = `sellers/${sellerId}/reviews/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteSellerReview = async (sellerId) => {
  const url = `sellers/${sellerId}/reviews/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Seller tractors
/**
 * @typedef {Object} Image
 * @property {string} id - The unique identifier of the image.
 * @property {string} url - The URL of the image.
 * @property {string} alt - The alternative text for the image.
 */



/**
 * @typedef {Object} CreateSellerTracktorPayload
 * @property
 */

/**
 * @typedef {Object} UpdateSellerTracktorPayload
 * @property
 */

/**
 * @typedef {Object} SellerTracktorListItem
 * @property
 */

/**
 * @typedef {Object} SellerTracktorListResponse
 * @property
 */

/**
 * @typedef {Object} SellerTracktorResponse
 * @property
 */

/**
 * Get tractors for a specific seller.
 *
 * @param {string} sellerId - The ID of the seller.
 * @param {Object} [params] - Query parameters for filtering and pagination.
 * @param {number} [params.page] - The page number for pagination.
 * @param {number} [params.per_page] - The number of items per page.
 * @returns {Promise<SellerTracktor[]>} A promise resolving to the response data.
 */
export const getSellerTractors = async (sellerId, params) => {
  const url = `sellers/${sellerId}/tractors/`;
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getSellerTractor = async (sellerId, tractorId) => {
  const url = `sellers/${sellerId}/tractors/${tractorId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createSellerTractor = async (sellerId, payload) => {
  const url = `sellers/${sellerId}/tractors/`;
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateSellerTractor = async (sellerId, tractorId, payload) => {
  const url = `sellers/${sellerId}/tractors/${tractorId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteSellerTractor = async (sellerId, tractorId) => {
  const url = `sellers/${sellerId}/tractors/${tractorId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};
