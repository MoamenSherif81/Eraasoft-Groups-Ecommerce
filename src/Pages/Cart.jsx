import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from '../Components/CartList/CartList';
import CartInfo from "../Components/CartInfo/CartInfo";
import { removeAll } from "../rtk/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  function handleRemoveCart(){
    dispatch(removeAll());
  }

  return (
    <div className="cart-cont container mt-5">
      <div className="cart-header d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bolder">Shopping Cart</h5>
        <span className="remove-all-products" onClick={handleRemoveCart}>Remove All</span>
      </div>
      {cartItems?.length > 0 ? (
        <Fragment>
          <CartList />
          <CartInfo />
        </Fragment>
      ) : (
        <h1 className="text-center mt-5">Cart is empty</h1>
      )}
    </div>
  );
}
