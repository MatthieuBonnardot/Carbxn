import axios from "axios";
import { USER_SERVER } from "../components/Config";

export const registerUser = async ({ values }) => {
  try {
    const { data } = await axios.post(`${USER_SERVER}/users/register`, values);

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const loginUser = async ({ values }) => {
  console.log("values", values);
  try {
    const { data } = await axios.post(`${USER_SERVER}/users/login`, values);

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const auth = async () => {
  try {
    const { data } = await axios.get(`${USER_SERVER}/users/auth`);

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.get(`${USER_SERVER}/users/logout`);

    return data;
  } catch (error) {
    return new Error(error);
  }
};
