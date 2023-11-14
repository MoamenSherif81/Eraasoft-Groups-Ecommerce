import { Fragment, useEffect} from "react"
import { RouterProvider } from "react-router"
import { router } from "./Routes/mainRoutes"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from './rtk/slices/authSlice';
import { calcQuantities, getCart, increaseCount } from "./rtk/slices/cartSlice";
import { saveCartData } from "./Services/APIs/cart";

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const userData = useSelector(state => state.authReducer.userData);
  const cartData = useSelector(state => state.cartReducer.cart);
  const count = useSelector(state => state.cartReducer.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  useEffect(() => {
    if(isAuth){
      dispatch(getCart(userData.id));
    }
  }, [dispatch, isAuth, userData?.id])

  useEffect(() => {
    dispatch(calcQuantities());
    if(count < 2){
      dispatch(increaseCount());
    } else {
      saveCartData(userData.id, cartData);
    }
  }, [cartData, dispatch])

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
