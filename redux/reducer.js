import { combineReducers } from "redux";

import { UPDATE_COUNTRY, UPDATE_UNIVERSITY, UPDATE_FAVORITE } from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const initialStateCountry = {
  name: "Brazil",
  flag: "br",
};

const initialStateUniversity = {
  country: "United States of America",
  name: "Harvard University",
  webpage: "http://www.harvard.edu/",
};

const countryReducer = (state = initialStateCountry, action) => {
  switch (action.type) {
    case UPDATE_COUNTRY:
      return action.payload;

    default:
      return state;
  }
};

const universityReducer = (state = initialStateUniversity, action) => {
  switch (action.type) {
    case UPDATE_UNIVERSITY:
      return action.payload;

    default:
      return state;
  }
};

const reducer = combineReducers({
  country: countryReducer,
  university: universityReducer,
});

export default reducer;
