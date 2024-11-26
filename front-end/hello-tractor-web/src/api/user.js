import { axiosInstance, handleError } from "./utils";

/**
 * @typedef {Object} CreateUserPayload
 * @property {string} email - The email of the user.
 * @property {string} firebase_id - The Firebase ID of the user.
 * @property {string} [name] - The name of the user.
 */

/**
 * @typedef {Object} UserResponse
 * @property {string} id - The ID of the user.
 * @property {string} firebase_id - The Firebase ID of the user.
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string|null} phone_number - The phone number of the user.
 * @property {string|null} address - The address of the user.
 * @property {string} created_at - The creation timestamp of the user.
 * @property {string} updated_at - The last update timestamp of the user.
 */

/**
 * @typedef {Object} UserListResponse
 * @property {number} count - The total number of users.
 * @property {number} page - The current page number.
 * @property {number} per_page - The number of users per page.
 * @property {UserResponse[]} results - Array of user objects.
 */

/**
 * Get a user by ID.
 *
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<UserResponse>} A promise resolving to the user data.
 */
export const getUser = async (userId) => {
  const url = `/users/${userId}/`;
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Get a log in and authenticated user.
 *
 * @param {Object} params - Optional query parameters.
 * @returns {Promise<UserResponse>} A promise resolving to the response data.
 */
export const getLoggedInUser = async (params) => {
  const url = "/users/me";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Get a list of users.
 *
 * @param {Object} params - Optional query parameters.
 * @returns {Promise<UserListResponse>} A promise resolving to the response data.
 */
export const getUsers = async (params) => {
  const url = "/users/";
  try {
    const { data } = await axiosInstance.get(url, { params });
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Create a new user.
 *
 * @param {CreateUserPayload} payload - The payload for creating a new user.
 * @returns {Promise<UserResponse>} The response containing the created user data.
 */
export const createUser = async (payload) => {
  const url = "/users/";
  try {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (userId, payload) => {
  const url = `/users/${userId}/`;
  try {
    const { data } = await axiosInstance.patch(url, payload);
    return data;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Check if a user exists by email, and create one if not found.
 *
 * @param {CreateUserPayload} payload - The payload for creating or checking the user.
 * @returns {Promise<UserResponse>} The response containing the user data.
 */
export const getOrCreateUser = async (payload) => {
  const { firebase_id } = payload;
  const url = "/users/";
  try {
    // Search for the user by email
    const { data: userList } = await axiosInstance.get(url, { params: { firebase_id } });
    
    if (userList.count > 0) {
      // User exists; return the first match
      return userList.results[0];
    }

    // User does not exist; create a new user
    const createdUser = await createUser(payload);
    return createdUser;
  } catch (error) {
    handleError(error);
  }
};

/**
 * Delete a user by ID.
 *
 * @param {string} userId - The ID of the user to delete.
 * @returns {Promise<void>} A promise resolving to indicate the deletion was successful.
 */
export const deleteUser = async (userId) => {
  const url = `/users/${userId}/`;
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    handleError(error);
  }
};
