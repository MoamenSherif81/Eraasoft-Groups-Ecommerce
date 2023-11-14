import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email should be a valid email").required("Email is required"),
  password: Yup.string().required().min(8, "Password must be at least 8 characters"),
})

export default loginSchema;


/**
 * {
 *  email: 'moamen@gmail.com',
 *  password: 'Moamen',
 * }
 */