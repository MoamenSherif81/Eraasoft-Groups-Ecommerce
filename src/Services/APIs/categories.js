import { myAxios } from "./api";

export const getCategories = async () => {
  const data = await myAxios(`/categories`)
  return data.data;
}