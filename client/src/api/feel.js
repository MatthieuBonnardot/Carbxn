import axios from "axios";
import { USER_SERVER } from "../components/Config";

export const fetchFeels = async () => {
  try {
    const { data } = await axios.get(`${USER_SERVER}/feel/list`);

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const createFeel = async ({ dataToSubmit }) => {
  try {
    const { data } = await axios.post(
      `${USER_SERVER}/feel/create`,
      dataToSubmit
    );

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const fetchReport = async () => {
  try {
    const { data } = await axios.get(`${USER_SERVER}/feel/report`);

    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const deleteFeel = async (id) => {
  try {
    const { data } = await axios.delete(`${USER_SERVER}/feel/delete/${id}`);

    return data;
  } catch (error) {
    return new Error(error);
  }
};
