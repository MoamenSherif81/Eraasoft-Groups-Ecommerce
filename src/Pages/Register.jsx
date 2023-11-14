import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import registerSchema from "../Schemas/RegisterSchema";
import { register } from "../Services/APIs/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser, login } from "../rtk/slices/authSlice";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const users = useSelector((state) => state.authReducer.users);
  const [generalError, setGeneralError] = useState();
  const dispatch = useDispatch();

  async function handleRegisterSubmit(values, {resetForm}) {
    setGeneralError(undefined)
    if(users.find(user => user.email == values.email)){
      setGeneralError('Account is already registerd')
    } else {
      const userData = {...values};
      delete userData.confirmPassword 
      const data = await register(userData);
      dispatch(addUser(data));
      dispatch(login(data))
      resetForm();
    }
  }

  return (
    <Container className="my-5">
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleRegisterSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
          return (
            <Form className="user__form" onSubmit={handleSubmit}>
              {generalError && <div className="text-danger mb-4">{generalError}</div>}
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name: </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password: </Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
              </Form.Group>
              <div className="mb-3">
                Already have an account? <Link to="/login">Login now</Link>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <Button className="px-4" variant="primary" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
