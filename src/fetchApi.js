import axios from "axios";

export const fetchHandler = async (url) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${url}/`
  );
  return data;
};
