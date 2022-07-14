import { useFormik } from "formik";
import * as yup from "yup";
import { string } from "yup";

export function BasicForm() {
  const userValidation = yup.object({
    email: string().required().min(5),
    password: string().required().min(12),
  });
  const { values, handleBlur, handleChange, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "jack",
        password: "",
      },
      validationSchema: userValidation,
      onSubmit: (values) => {
        console.log("on Submit", values);
      },
    });
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="FormValidationGroup">
        {touched.email && errors.email ? errors.email : ""}
        <input
          value={values.email}
          type="email"
          placeholder="Enter your Email"
          onChange={handleChange}
          name="email"
          onBlur={handleBlur}
        />

        {touched.password && errors.password ? errors.password : ""}
        <input
          type="password"
          placeholder="Enter your Passward"
          value={values.password}
          onChange={handleChange}
          name="password"
          onBlur={handleBlur}
        />

        <button type="submit"> Submit</button>
      </div>
    </form>
  );
}
