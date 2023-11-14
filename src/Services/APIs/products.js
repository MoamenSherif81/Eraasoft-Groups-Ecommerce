import { myAxios } from "./api";

export const PRODUCTS_PER_PAGE = 8;

export const getProducts = async () => {
  const data = await myAxios(`/products`)
  return data.data;
}

export const getProductsPaginated = async (page, filters = "") => {
  const data = await myAxios(`/products?_page=${page}&_limit=${PRODUCTS_PER_PAGE}&${filters}`)
  return data;
}