import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must include 6 characters, one uppercase, and one special character")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      console.log("User logged in:", user);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/home");
      }, 2000); // Popup disappears after 2 seconds
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="login-section"
      style={{
        backgroundColor: "#f0f8ff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div
          className="account-wrapper"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h2 style={{ textAlign: "center" }}>Login</h2>
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
                  marginInlineStart: "auto",
                }}
              >
                <div>
                  <label>Email:</label>
                  <Field type="email" name="email" className="input-field" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className="input-field"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                {errorMessage && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "-10px",
                      marginBottom: "10px",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
                <div>
                  <button type="submit" className="btn-submit">
                    Login Now
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="account-button">
            <span className="d-block cate pt-5">
              Do not Have An Account? <Link to="/sign-up">SignUp</Link>
            </span>
          </div>
        </div>
        {showPopup && (
          <div
            className="popup-animation"
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
              animation: "fadeIn 0.5s",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <h3>Congratulations!</h3>
              <p>You are logged in successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
