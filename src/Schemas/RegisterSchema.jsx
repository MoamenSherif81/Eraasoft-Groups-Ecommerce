import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: Yup.string().email("Email should be a valid email").required("Email is required"),
  password: Yup.string().required().min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], "Passwords don't match"),
  // gender: Yup.string().required().oneOf(['male', 'female'])
})

export default registerSchema;


/**
 * {
 *  name: 'Moamen Sherif',
 *  email: 'moamen@gmail.com',
 *  password: 'Moamen',
 *  confirmPassword: 'Moamen',
 * }
 */