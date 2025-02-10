import { fetchGroups } from "../models/api";

export const getSubGroups = async (groupId) => {
  try {
    const data = await fetchGroups();
    const group = data.groups.find((g) => g.id === parseInt(groupId));
    if (!group) throw new Error("Group not found");
    return group.subGroups;
  } catch (error) {
    throw new Error(error.message);
  }
};
