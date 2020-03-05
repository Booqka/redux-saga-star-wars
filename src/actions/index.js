import {
  FETCHED_STARSHIP,
  FETCHED_STARSHIPS,
  REQUESTED_DATA,
  REQUESTED_DATA_FAILED,
  REQUESTED_DATA_SUCCEEDED,
  SET_NEXT_PAGE, SET_PREVIOUS_PAGE, SET_STARSHIP_DATA
} from './types'

export const requestData = () => {
  return { type: REQUESTED_DATA }
};

export const requestDataSuccess = (starships) => {
  return { type: REQUESTED_DATA_SUCCEEDED, starships }
};

export const requestDataError = () => {
  return { type: REQUESTED_DATA_FAILED }
};

export const fetchStarships = (url) => {
  return { type: FETCHED_STARSHIPS, url }
};

export const fetchStarship = (id) => {
  return { type: FETCHED_STARSHIP, id }
};

export const setStarshipData = (data) => {
  return { type: SET_STARSHIP_DATA, data }
};

export const setNextPage = (url) => {
  return { type: SET_NEXT_PAGE, url }
};

export const setPreviousPage = (url) => {
  return { type: SET_PREVIOUS_PAGE, url }
};
