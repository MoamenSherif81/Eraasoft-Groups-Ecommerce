import { useSelector } from "react-redux";
import CartProduct from "../CartProduct/CartProduct";

export default function CartList() {
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return (
    <div>
      <table className="cart w-100">
        <tbody>
          {cartItems.map((ele) => {
            return <CartProduct key={ele.id} product={ele} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
