import initialState from './initialState'

export default function swReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUESTED_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'REQUESTED_DATA_SUCCEEDED':
      return {
        ...state,
        starships: action.starships,
        loading: false,
      };
    case 'SET_STARSHIP_DATA':
      return {
        ...state,
        starship: action.data,
        loading: false,
      };
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        next: action.url,
      };
    case 'SET_PREVIOUS_PAGE':
      return {
        ...state,
        previous: action.url,
      };
    case 'REQUESTED_DATA_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
