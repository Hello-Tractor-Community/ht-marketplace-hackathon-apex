import { axiosInstance, handleError } from "./utils";

/**
 * @typedef {Object} Image
 * @property {string} id - The unique identifier of the image.
 * @property {string} url - The URL of the image.
 * @property {string} alt - The alternative text for the image.
 */

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} email - The email of the user.
 */

/**
 * @typedef {Object} Seller
 * @property {string} id - The unique identifier of the seller.
 * @property {User} user - The user object associated with the seller.
 */

/**
 * @typedef {Object} Tractor
 * @property {string} id - The unique identifier of the tractor.
 * @property {Seller} seller - The seller of the tractor.
 * @property {string} make - The make of the tractor.
 * @property {string} model - The model of the tractor.
 * @property {string} brand - The brand of the tractor.
 * @property {number} price - The price of the tractor.
 * @property {string} name - The name of the tractor.
 * @property {string} description - The description of the tractor.
 * @property {Image[]} images - Array of image objects associated with the tractor.
 * @property {string} specifications - The specifications of the tractor.
 * @property {string} history - The history of the tractor.
 * @property {number} hours - The number of hours the tractor has been used.
 * @property {string} location - The location of the tractor.
 * @property {boolean} is_approved - Whether the tractor is approved or not.
 * @property {boolean} is_active - Whether the tractor is active or not.
 * @property {number} stock - The stock of the tractor.
 * @property {string} created_at - The date and time when the tractor was created.
 * @property {string} updated_at - The date and time when the tractor was last updated.
 */

/**
 * @typedef {Object} TractorFilters
 * @property {string} [make] - The make of the tractor.
 * @property {string} [model] - The model of the tractor.
 * @property {number} [price] - The price of the tractor.
 * @property {string} [name] - The name of the tractor.
 * @property {string} [description] - The description of the tractor.
 * @property {string} [specifications] - The specifications of the tractor.
 * @property {string} [history] - The history of the tractor.
 * @property {number} [hours] - The number of hours the tractor has been used.
 * @property {string} [location] - The location of the tractor.
 * @property {boolean} [is_approved] - Whether the tractor is approved or not.
 * @property {boolean} [is_active] - Whether the tractor is active or not.
 */

/**
 * @typedef {Object} UpdateTractorPayload
 * @property {string} [make] - The make of the tractor.
 * @property {string} [model] - The model of the tractor.
 * @property {string} [brand] - The brand of the tractor.
 * @property {number} [price] - The price of the tractor.
 * @property {string} [name] - The name of the tractor.
 * @property {string} [description] - The description of the tractor.
 * @property {string} [specifications] - The specifications of the tractor.
 * @property {string} [history] - The history of the tractor.
 * @property {number} [hours] - The number of hours the tractor has been used.
 * @property {string} [location] - The location of the tractor.
 * @property {boolean} [is_approved] - Whether the tractor is approved or not.
 * @property {boolean} [is_active] - Whether the tractor is active or not.
 * @property {number} [stock] - The stock of the tractor.
 */

/**
 * @typedef {Object} TractorListResponse
 * @property {number} count - The total number of tractors.
 * @property {number} page - The current page number.
 * @property {number} per_page - The number of tractors per page.
 * @property {Tractor[]} results - Array of tractor objects.
 */

/**
 * @typedef {Object} TractorDetailResponse
 * @property {Tractor} data - The tractor data.
 * @property {string} message - A message associated with the response.
 * @property {number} status - The HTTP status code of the response.
 */

/**
 * Retrieve a tractor by its ID.
 *
 * @param {string} id - The ID of the tractor to retrieve.
 * @returns {Promise<Tractor>} A promise resolving to the tractor data.
 */
export const getTractor = async (id) => {
  const url = `tractors/${id}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Retrieve a list of tractors.
 *
 * @param {TractorFilters} params - Optional query parameters.
 * @returns {Promise<TractorListResponse>} A promise resolving to the response data.
 */
export const getTractors = async (params) => {
  const url = "tractors/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Create a new tractor.
 *
 * @param {Tractor} payload - The tractor data to create.
 * @returns {Promise<Tractor>} A promise resolving to the created tractor data.
 */
export const createTractor = async (payload) => {
  const url = "tractors/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Update an existing tractor.
 *
 * @param {string} id - The ID of the tractor to update.
 * @param {UpdateTractorPayload} payload - The updated tractor data.
 * @returns {Promise<Tractor>} A promise resolving to the updated tractor data.
 */
export const updateTractor = async (id, payload) => {
  const url = `tractors/${id}/`;
  try {
    const { data } = await axiosInstance.put(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Delete a tractor by its ID.
 *
 * @param {string} id - The ID of the tractor to delete.
 * @returns {Promise<void>} A promise resolving to indicate the deletion was successful.
 */
export const deleteTractor = async (id) => {
  const url = `tractors/${id}/`;
  try {
    await axiosInstance.delete(url);
  } catch (error) {
    handleError(error);
  }
};


/**
 * @typedef {Object} TractorReview
 * @property {string} id - The unique identifier of the review.
 * @property {string} tractor - The tractor being reviewed.
 * @property {string} tractor_id - The ID of the tractor being reviewed.
 * @property {string} seller - The seller of the tractor being reviewed.
 * @property {string} seller_id - The ID of the seller of the tractor being reviewed.
 * @property {string} review - The review text.
 * @property {number} rating - The rating given in the review.
 * @property {User} user - The user who wrote the review.
 * @property {string} created_at - The date and time when the review was created.
 * @property {string} updated_at - The date and time when the review was last updated.
 */

/**
 * Retrieve reviews for a tractor.
 * 
 * @param {string} id 
 * @returns {Promise<TractorReview[]>} A promise resolving to the response data.
 */
export const getTractorReviews = async (id) => {
  const url = `tractors/${id}/reviews/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getTractorReview = async (id, reviewId) => {
  const url = `tractors/${id}/reviews/${reviewId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createTractorReview = async (id, payload) => {
  const url = `tractors/${id}/reviews/`;
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateTractorReview = async (id, reviewId, payload) => {
  const url = `tractors/${id}/reviews/${reviewId}/`;
  try {
    const { data } = await axiosInstance.put(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteTractorReview = async (id, reviewId) => {
  const url = `tractors/${id}/reviews/${reviewId}/`;
  try {
    await axiosInstance.delete(url);
  } catch (error) {
    handleError(error);
  }
};
