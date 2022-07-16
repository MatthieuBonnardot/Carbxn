import {
  FEEL_LIST,
  CREATE_FEEL,
  FETCH_REPORT,
  FETCH_FEEL_BY_ID,
  DELETE_FEEL,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FEEL_LIST:
      return { ...state, list: action.payload };
    case CREATE_FEEL:
      return { ...state, feelSuccess: action.payload };
    case FETCH_REPORT:
      return { ...state, report: action.payload };
    case FETCH_FEEL_BY_ID:
      return { ...state, feel: action.payload };
    case DELETE_FEEL:
      return { ...state };
    default:
      return state;
  }
}
