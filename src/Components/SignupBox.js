import React,{useState} from 'react'
import { ErrorMessage, Field, Formik, Form, validateYupSchema } from "formik";
import './Styles/SignupBox.css'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { loginUserAction, registerUserAction } from '../redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { getAllPostAction } from '../redux/Post/post.action';
const initialValues = {firstName:"", lastName:"", email:"", password:"", gender:""}
const validationSchema = {email:Yup.string().email("Invalid email").required("Email is required"), password:Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")}
const SignupBox = () => {
    const [user, setUser] = useState([]);
    const [gender, setGender] = useState("");
    const [person, setPerson] = useState({ name:"", email: "", password: "" });
    const dispatch = useDispatch()
    const [show, showModal] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
      // const name = e.target.name;
      // const value = e.target.value;
      // setPerson({ ...person, [name]: value });
      setGender(e.target.value);

    };
    const getDetails = (e) => {
      e.preventDefault();
      const { name, email, password } = person;
      if (email && password) {
        setUser([...user, { ...person, id: new Date().getTime().toString() }]);
        showModal(true);
      } else {
        console.log("empty fields");
      }
    };

    const handleSubmit = (values) => {
    values.gender = gender;
    dispatch(registerUserAction({data:values}))
    dispatch(getAllPostAction())
      console.log("handle submit", values)
      navigate('/')
      
    }
    return (
      <section className="second-section">
      {/* { show && <p>User added successfully</p>} */}
      <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
      {/* <form className="form" onSubmit={getDetails}> */}
      <Form className="form" >
        <ul className="inputs">
        <li className="name">
            {/* <input
              type="text"
              placeholder="Full Name"
              name="name"
              id="name"
              autoComplete="off"
              value={person.name}
              onChange={handleChange}
            /> */}
            <Field
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            autoComplete="off"
         
          />
            <ErrorMessage name="firstName" component="div" style={{ "color": "red" }} />
          </li>
          <li className="name">
            {/* <input
              type="text"
              placeholder="Full Name"
              name="name"
              id="name"
              autoComplete="off"
              value={person.name}
              onChange={handleChange}
            /> */}
            <Field
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            autoComplete="off"
         
          />
                      <ErrorMessage name="lastName" component="div" style={{ "color": "red" }} />

          </li>
          <li className="email">
            {/* <input
              type="text"
              placeholder="Email id"
              name="email"
              id="email"
              autoComplete="off"
              value={person.email}
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
          <li>
          <input onChange={handleChange} type="radio" id="child" name="age" value="male"/>
  <label for="child" style={{"color":"#fff"}}>male</label><br/>

  <input type="radio" onChange={handleChange} id="senior" name="age" value="female"/>
  <label for="senior" style={{"color":"#fff"}}>female</label>

  <ErrorMessage name="gender" component="div" style={{ "color": "red" }} />

         
          </li>
          <li className="button">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </li>
        </ul>
        <div className="forgot">
          
          <div className="signup2">
            Already have an account?<a onClick={()=>navigate('/login')}>Log in</a>
          </div>
        </div>
      </Form>
      </Formik>
    </section>
    )
}

export default SignupBox