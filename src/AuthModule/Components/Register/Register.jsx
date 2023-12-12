import axios from "axios";
import logo from "../../../assets/images/logo4-3.png";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./../../../Context/AuthContext";
import { ToastContext } from "./../../../Context/ToastContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    // console.log(watch("email"))
    // console.log(watch("password"))
    // await axios
      // .post(`${baseUrl}Users/Login`, data)
      // .then((response) => {
        // setTimeout(() => {
        //   getToastValue("success", "Congratulations! You are logIn");
        // }, 1000);

        // console.log(response.data.token);
        //  localStorage.setItem(
        //   "userToken",
        //   response.data.token
        // );
        // console.log(userToken);
        // saveUserData();
      //   navigate("/dashboard");
      // })
      // .catch((error) => {
        // console.log(error.response.data.message);
        // getToastValue("error", error.response.data.message);
      // });
    };
  return (
    <div className="auth-container container-fluid">
    <ToastContainer />
    <div className="row bg-overlay vh-100 justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="bg-white p-2">
          <div className="logo-cont text-center">
            <img src={logo} className="w-50" alt="logo" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="m-auto w-75"
          >
            <h2>Register</h2>
            <p>Welcome Back! Please enter your details</p>
            <div className="row">
              <div className="col-md-6 ">
                  <div className="form-group my-3">
                  <input
                    {...register("userName", {
                      required: true,
                      
                    })}
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="userName"
                  />
                  {errors.userName && errors.userName.type === "required" && (
                    <span className="text-danger">userName is required</span>
                  )}
                  </div>
                  
                  <div className="form-group my-3">
                  <input
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  {errors.password && errors.password.type === "required" && (
                    <span className="text-danger">Password is required</span>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <span className="text-danger ">password is invalid</span>
                  )}
                  </div>
                  <div className="form-group my-3">
                  <input
                    {...register("confirmPassword ", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                    type="password"
                    name="confirmPassword "
                    className="form-control"
                    placeholder="confirmPassword "
                  />
                  {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                    <span className="text-danger">confirmPassword is required</span>
                  )}
                  {errors.confirmPassword  && errors.confirmPassword.type === "pattern" && (
                    <span className="text-danger ">confirmPassword is invalid</span>
                  )}
                  </div>
              </div>
              <div className="col-md-6">

                  <div className="form-group my-3">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your E-mail"
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-danger ">Email is required</span>
                  )}

                  {errors.email && errors.email.type === "pattern" && (
                    <span className="text-danger ">Email is invalid</span>
                  )}
                  </div>
                  <div className="form-group my-3">
                  <input
                    {...register("country", {
                      required: true,
                    })}
                    type="text"
                    name="country"
                    className="form-control"
                    placeholder="country"
                  />
                  {errors.country && errors.country.type === "required" && (
                    <span className="text-danger">countryis required</span>
                  )}
                  
                  </div>
                  <div className="form-group my-3">
                  <input
                    {...register("phoneNumber", {
                      required: true,
                    })}
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="phoneNumber"
                  />
                  {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                    <span className="text-danger">phoneNumber is required</span>
                  )}
                  
                  </div>
              </div>
            </div>
            
            
            
            <div className="form-group my-3">
              <button type="submit" className="btn btn-success w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register