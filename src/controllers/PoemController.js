import { fetchGroups } from "../models/api";

export const getPoems = async (groupId, subGroupId) => {
  try {
    const data = await fetchGroups();
    const group = data.groups.find((g) => g.id === parseInt(groupId));
    if (!group) throw new Error("Group not found");

    const subGroup = group.subGroups.find((sub) => sub.id === parseInt(subGroupId));
    if (!subGroup) throw new Error("Sub-group not found");

    return subGroup.kurals;
  } catch (error) {
    throw new Error(error.message);
  }
};


