const API_URL = "https://mocki.io/v1/76a7b175-6f38-47c6-a739-215f1f803a5c";

export const fetchGroups = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
