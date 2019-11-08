import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

const LoginFrom = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <Form>
      {touched.name && errors.name && <p className="error">{errors.name}</p>}
      <Field type="text" name="name" placeholder="Name" />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}
      <Field type="password" name="password" placeholder="Password" />
      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
      {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
      <label>
        <Field type="checkbox" name="tos" value="false" />
        <span>Terms of Service</span>
      </label>
      <button type="submit">Submit!</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      name: values.name || "",
      password: values.password || "",
      email: values.email || "",
      tos: values.tos || false
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
    tos: yup.boolean().oneOf([true], "Please read Terms of Service")
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
})(LoginFrom);
