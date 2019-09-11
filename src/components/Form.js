import React from "react";
import { withFormik, Form, Field } from "formik";

const LoginFrom = props => {
  return (
    <div className="loginForm">
      <Form>
        <Field type="name" name="name" placehlder="Name" />
        <Field type="password" name="password" placehlder="Password" />
        <Field type="email" name="email" placehlder="Email" />
        <Field type="radio" name="Terms of Service" />
        <button>Submit!</button>
      </Form>
    </div>
  );
};

export default LoginFrom;
