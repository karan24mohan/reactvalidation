import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Registration() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        console.log(values);
        actions.resetForm();
      },
    });

  console.log(errors);
  //   console.log(Formik);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="heading">
              <h1>Welcome!</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </div>
              <div className="input-block">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <div className="input-block">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p>{errors.confirmPassword}</p>
                ) : null}
              </div>
              <div className="input-block">
                <button type="submit">Registration</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="formImage">
              <img src="/Images/Fill_Form.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
