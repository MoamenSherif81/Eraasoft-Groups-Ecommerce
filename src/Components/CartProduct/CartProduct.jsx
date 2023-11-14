import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeItem } from '../../rtk/slices/cartSlice';

export default function CartProduct(props) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity(){
    dispatch(increaseQty(props.product.id));
  }
  function handleDecreaseQuantity(){
    dispatch(decreaseQty(props.product.id));
  }
  function handleRemove(){
    dispatch(removeItem(props.product.id));
  }

  return (
    <tr className="cart-product">
    <td>
      <div className="d-flex gap-3 align-items-center">
        <img className="cart-product-img p-2" src={props.product.thumbnail} alt='' />
        <h5>{props.product.title}</h5>
      </div>
    </td>

    <td>
      <div className="cart-product-amount px-2">
        <span className="change-amount change-amount-inc" onClick={handleIncreaseQuantity}>+</span>
        <span className="quantity">{props.product.quantity}</span>
        <span className="change-amount change-amount-dec" onClick={handleDecreaseQuantity}>-</span>
      </div>
    </td>

    <td>
      <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
        <span className="fw-bolder fs-4">${props.product.price}</span>
        <span className="remove-product" onClick={handleRemove}>Remove</span>
      </div>
    </td>
  </tr>
  )
}

CartProduct.propTypes = {
  product: PropTypes.any
}