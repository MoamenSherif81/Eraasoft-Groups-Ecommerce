import { myAxios } from "./api";

export const saveCartData = async (id, cartData) => {
  const data = await myAxios.patch(`/users/${id}`, {cart: cartData});
  return data.data;
}