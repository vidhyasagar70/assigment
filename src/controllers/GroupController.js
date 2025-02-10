import { fetchGroups } from "../models/api";

export const getGroups = async () => {
  try {
    const data = await fetchGroups();
    return data.groups;
  } catch (error) {
    throw new Error(error.message);
  }
};
