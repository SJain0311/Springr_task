import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialValues = {
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
  };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    navigate("/ViewTask", { state: { formValues } });
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
        errors.firstName = "First Name is required!";
      }
    if (!values.lastName) {
        errors.lastName = "Last Name is required!";
      }
    if (!values.userName) {
      errors.userName = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    } else if (values.phone.length === 10) {
      errors.phone = "phone must be 10 numbers";
    } else if (values.phone.length > 10) {
      errors.phone = "phone cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="loginin">
      <form onSubmit={handleSubmit} className="loginForm">
      <h2>LOGIN FORM</h2>

      <div className="inputField mb-3">
          <label className="form-label loginLabel" htmlFor="inputfirstName">
           First Name*
          </label>
          <input
            type="text"
            className="form-control "
            name="firstName"
            placeholder="User Name"
            id="inputfirstName"
            aria-describedby="firstNameHelp"
            value={formValues.firstName}
            onChange={handleChange}
          />
          { (!formValues.firstName)? <p className="error">{formErrors.firstName}</p> : <></>}
        </div>
      <div className="inputField mb-3">
          <label className="form-label loginLabel" htmlFor="inputfirstName">
           Last Name*
          </label>
          <input
            type="text"
            className="form-control "
            name="lastName"
            placeholder="User Name"
            id="inputfirstName"
            aria-describedby="firstNameHelp"
            value={formValues.lastName}
            onChange={handleChange}
          />
           { (!formValues.lastName)? <p className="error">{formErrors.lastName}</p> : <></>}
        </div>
        <div className="inputField mb-3">
          <label className="form-label loginLabel" htmlFor="inputuserEmail" >
            Email*
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            id="inputuserEmail"
            aria-describedby="emailHelp"
            value={formValues.email}
            onChange={handleChange}
          />
          { (!formValues.email)? <p className="error">{formErrors.email}</p> : <></>}
        </div>

        <div className="inputField mb-3">
                <label className="form-label loginLabel" htmlFor="inputuserphone">
            phone*
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="phone"
            id="inputuserphone"
            aria-describedby="phoneHelp"
            value={formValues.phone}
            onChange={handleChange}
          />
          { (!formValues.phone)? <p className="error">{formErrors.phone}</p> : <></>}
        </div>
        <div className="submit d-flex justify-content-center">
          <button type="submit" className=" submitBtn btn btn-success ">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;