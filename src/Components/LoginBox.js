import React,{useState} from 'react'
import './Styles/LoginBox.css'
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../redux/Auth/auth.action';
import { getAllPostAction } from '../redux/Post/post.action';
const initialValues = {email:"", password:""}
const validationSchema = {email:Yup.string().email("Invalid email").required("Email is required"), password:Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")}
const LoginBox = () => {
    const [user, setUser] = useState([]);
  const [person, setPerson] = useState({ email: "", password: "" });
  const [show, showModal] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const getDetails = (e) => {
    e.preventDefault();
    const { email, password } = person;
    if (email && password) {
      setUser([...user, { ...person, id: new Date().getTime().toString() }]);
      showModal(true);
    } else {
      console.log("empty fields");
    }
  };

  const handleSubmit = (values) => {
    dispatch(loginUserAction({data:values}))
    console.log("handle submit", values)
    dispatch(getAllPostAction())
  }
  return (
    <section className="second-section">
    {/* { show && <p>User added successfully</p>} */}
    <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
    
 
    {/* <form className="form" onSubmit={getDetails}> */}
    <Form className='form'>
      <ul className="inputs">
        <li className="email">
          {/* <input
            type="text"
            placeholder="Email id"
            name="email"
            id="email"
            autoComplete="off"
            value={person.firstName}
            onChange={handleChange}
          /> */}
          <Field
            type="email"
            placeholder="Email id"
            name="email"
            id="email"
            autoComplete="off"
         
          />
          <ErrorMessage name="email" component="div" style={{ "color": "red" }} />
        </li>
        <li className="password">
          {/* <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="off"
            value={person.password}
            onChange={handleChange}
          /> */}

          <Field
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="off"
        
          />
           <ErrorMessage name="password" component="div" style={{ "color": "red" }} />
           
        </li>
        <li className="button">
          <button type="submit" className="btn">
            Log In
          </button>
        </li>
      </ul>
      <div className="forgot">
        <div className="forgotP">
          <a href="#">Forgot password?</a>
        </div>
        <div className="signup2">
          Dont have an account?<a onClick={()=>navigate('/register')}>Sign up</a>
        </div>
      </div>
    </Form>
    </Formik>
  </section>
  )
}

export default LoginBox