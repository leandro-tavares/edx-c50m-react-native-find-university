// action types
export const UPDATE_COUNTRY = "UPDATE_COUNTRY";
export const UPDATE_UNIVERSITY = "UPDATE_UNIVERSITY";

// action creators
export const updateCountry = (update) => ({
  type: UPDATE_COUNTRY,
  payload: update,
});

export const updateUniversity = (update) => ({
  type: UPDATE_UNIVERSITY,
  payload: update,
});
