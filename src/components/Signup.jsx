import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must include 6 characters, one uppercase, and one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    // Save user credentials to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    const isEmailExist = existingUsers.some(user => user.email === values.email);
    if (isEmailExist) {
      alert("Email is already registered. Please use a different email.");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("User registered successfully:", newUser);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div
      className="signup-section"
      style={{
        backgroundColor: "#e6f7ff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "400px", width: "100%" }}>
        <div
          className="account-wrapper"
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div>
                  <label>Username:</label>
                  <Field
                    type="text"
                    name="username"
                    className="input-field"
                    style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                  />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>
                <div>
                  <label>Email:</label>
                  <Field
                    type="email"
                    name="email"
                    className="input-field"
                    style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                  />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <label>Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className="input-field"
                    style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                  />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div>
                  <label>Confirm Password:</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="input-field"
                    style={{ width: "100%", padding: "10px", margin: "5px 0" }}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  style={{
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div
            className="account-button"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <span className="d-block cate pt-5">
              Already Have An Account? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
        {showPopup && (
          <div
            className="popup-notification"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: "fadeIn 0.5s",
              }}
            >
              <h3 style={{ margin: 0 }}>Congratulations!</h3>
              <p>Signup is successful. Proceed to login!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
