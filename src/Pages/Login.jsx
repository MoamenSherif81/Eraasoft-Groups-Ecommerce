import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from "../rtk/slices/authSlice";
import loginSchema from "../Schemas/LoginSchema";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const users = useSelector((state) => state.authReducer.users);
  const [generalError, setGeneralError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLoginSubmit(values, {resetForm}) {
    setGeneralError(undefined)
    const userObj = users.find(user => user.email == values.email && user.password == values.password);
    if(userObj){
      dispatch(login(userObj));
      navigate('/');
      resetForm();
    } else {
      setGeneralError('Email or password is incorrect');
    }
  }


  return (
    <Container className="my-5">
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleLoginSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => {
          return (
            <Form className="user__form" onSubmit={handleSubmit}>
              {generalError && <div className="text-danger mb-4">{generalError}</div>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
              </Form.Group>
              <div className="mb-3">
                Don{"'"}t Have and account?{" "}
                <Link to="/register">Create new account</Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me!" />
                </Form.Group>
                <Button className="px-4" variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
