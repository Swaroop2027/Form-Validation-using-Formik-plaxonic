import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [action, setAction] = useState("Sign Up");

  let navigate = useNavigate();

  const routeChange = () => {
    console.log("in route");
    navigate("/home");
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.phone) {
      errors.phone = "Phone is required";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log(formik.values);
  // console.log(formik.errors);
  // console.log("Touched", formik.touched);

  return (
    <div className="flex flex-col m-auto mt-[80px] mb-[80px] w-[600px] bg-[#ffffff] pb-[30px] rounded-[10px]">
      <div className="flex flex-col items-center w-full mt-[20px] mb-[10px]">
        <h1 className="text-[#3c009d] text-[40px] font-bold text-center">
          {action}
        </h1>
        <div className="w-[100px] h-[6px] bg-[#3c009d] rounded-[9px]"></div>
      </div>

      <div className="flex flex-col">
        <form className="form" onSubmit={formik.handleSubmit}>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="flex items-center m-auto w-[480px] h-[70px] bg-[#eaeaea] rounded-[6px] mb-[15px]">
              <label className="text-[larger] mx-[30px] my-0" htmlFor="name">
                Name:
              </label>
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#212121] text-[16px]"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>
          )}

          <div className="flex items-center m-auto w-[480px] h-[70px] bg-[#eaeaea] rounded-[6px] mb-[15px]">
            <label className="text-[larger] mx-[30px] my-0" htmlFor="email">
              Email:
            </label>
            <input
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#212121] text-[16px]"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="flex items-center m-auto w-[480px] h-[70px] bg-[#eaeaea] rounded-[6px] mb-[15px]">
            <label className="text-[larger] mx-[30px] my-0" htmlFor="password">
              Password:
            </label>
            <input
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#212121] text-[16px]"
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="flex items-center m-auto w-[480px] h-[70px] bg-[#eaeaea] rounded-[6px] mb-[15px]">
              <label className="text-[larger] mx-[30px] my-0" htmlFor="phone">
                Phone:
              </label>
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#212121] text-[16px]"
                type="text"
                id="phone"
                name="phone"
                pattern="[1-9]{1}[0-9]{9}"
                maxLength="10"
                placeholder="Enter your phone no."
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </div>
          )}

          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="flex items-center m-auto w-[480px] h-[70px] bg-[#eaeaea] rounded-[6px] mb-[15px]">
              <label className="text-[larger] mx-[30px] my-0" htmlFor="address">
                Address:
              </label>
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#212121] text-[16px]"
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}
            </div>
          )}

          <div className="flex mx-[auto] my-[30px] justify-center gap-4">
            {formik.values.name &&
            formik.values.email &&
            formik.values.password &&
            formik.values.phone &&
            formik.values.address ? (
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] text-[#ffffff] bg-[#4c00b4] rounded-[50px] text-[19px] font-bold cursor-pointer hover:bg-[linear-gradient(#2a00b7,_#42006c)]"
                onClick={() => {
                  setAction("Sign Up");
                  routeChange();
                }}
              >
                Sign Up
              </button>
            ) : (
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] text-[#ffffff] bg-[#4c00b4] rounded-[50px] text-[19px] font-bold cursor-pointer hover:bg-[linear-gradient(#2a00b7,_#42006c)]"
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </button>
            )}

            {formik.values.email &&
            formik.values.password &&
            !formik.errors.email ? (
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] text-[#ffffff] bg-[#4c00b4] rounded-[50px] text-[19px] font-bold cursor-pointer hover:bg-[linear-gradient(#2a00b7,_#42006c)]"
                onClick={() => {
                  setAction("Login");
                  routeChange();
                }}
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] text-[#ffffff] bg-[#4c00b4] rounded-[50px] text-[19px] font-bold cursor-pointer hover:bg-[linear-gradient(#2a00b7,_#42006c)]"
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
