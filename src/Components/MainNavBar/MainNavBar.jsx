import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./MainNavBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../rtk/slices/authSlice";

export default function MainNavBar() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between align-items-center w-100">
            <div className="d-flex gap-2">
              <NavLink className="text-decoration-none text-black nav__link px-2" to="/">Home</NavLink>
              <NavLink className="text-decoration-none text-black nav__link px-2" to="/shop">Shop</NavLink>
              <NavLink className="text-decoration-none text-black nav__link px-2" to="/cart">Cart</NavLink>
            </div>
            {isAuth ? 
              <Button variant="primary" onClick={() => dispatch(logout())}>Logout</Button>
            :
            <div className="d-flex gap-3">
              <NavLink className="text-decoration-none text-black nav__link px-2" to="/login">Login</NavLink>
              <NavLink className="text-decoration-none text-black nav__link px-2" to="/register">Register</NavLink>
            </div>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
