import { myAxios } from "./api";

export const handleGetUsersApi = async () => {
  const data = await myAxios(`/users`)
  return data.data;
}

export const handleGetUsersCartApi = async (id) => {
  const data = await myAxios(`/users/${id}`)
  return data.data.cart;
}

export const register = async (userData) => {
  const data = await myAxios.post(`/users`, {...userData, cart: []})
  return data.data;
}
