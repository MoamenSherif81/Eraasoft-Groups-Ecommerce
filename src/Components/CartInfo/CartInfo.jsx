import { useSelector } from "react-redux"

export default function CartInfo() {
  const totalItems = useSelector(state => state.cartReducer.totalItems)
  const totalPrice = useSelector(state => state.cartReducer.totalPrice)
  
  return (
    <div className="price-cont gap-2 d-flex align-items-end flex-column fw-bolder text-center" >
      <div className="w-25">
        <div className="d-flex justify-content-between align-items-center text-start">
          <div>
            <div>Total</div>
            <div><span className="items-num">{totalItems}</span> Items</div>
          </div>
          <div className="total-price fs-3">$ {totalPrice}</div>
        </div>
        <button className="btn btn-primary w-100">Checkout</button>
      </div>
    </div>
  )
}
