import axios from "axios";
import {
  FEEL_LIST,
  CREATE_FEEL,
  FETCH_REPORT,
  FETCH_FEEL_BY_ID,
  DELETE_FEEL,
} from "../_actions/types";
import { USER_SERVER } from "../components/Config";

export function feelList() {
  const request = axios
    .get(`${USER_SERVER}/feel/list`)
    .then((response) => response.data);

  return {
    type: FEEL_LIST,
    payload: request,
  };
}

export function createFeel(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/feel/create`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: CREATE_FEEL,
    payload: request,
  };
}

export function fetchReport() {
  const request = axios
    .get(`${USER_SERVER}/feel/report`)
    .then((response) => response.data);

  return {
    type: FETCH_REPORT,
    payload: request,
  };
}

export function fetchFeelById(id) {
  const request = axios
    .get(`${USER_SERVER}/feel/${id}`)
    .then((response) => response.data);

  return {
    type: FETCH_FEEL_BY_ID,
    payload: request,
  };
}

export function deleteFeel(id) {
  const request = axios
    .get(`${USER_SERVER}/feel/delete/${id}`)
    .then((response) => response.data);

  return {
    type: DELETE_FEEL,
    payload: request,
  };
}
