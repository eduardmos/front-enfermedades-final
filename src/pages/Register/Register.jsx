import React from "react";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { newUser } from "../redux/auth/auth.actions";
// import ReusableButton from "../components/ReusableButton";
// import { API } from "../shared/services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (formdata) => {
    // dispatch(newUser(formdata, navigate));
  };

  return (
    <form className= "registerForm" onSubmit={handleSubmit(registerUser)}>
      <label>
        User name
        <input type="text" {...register("userName", { required: true })} />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 5,
              message: "El email tiene que ser más largo",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Introduce un email on formato válido",
            },
          })}
        />
      </label>
      {errors.email ? (
        <>
          {errors.email.type === "required" && <p>{errors.email.message}</p>}
          {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>
      ) : null}
      <label>
        Password
        <input
          type="password"
          name="pasword"
          {...register("password", {
            required: "Escribe un pasword, por favor",
            //pattern:
            // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </label>
      {errors.password ? <p>El password no es correcto</p> : null}

      {/* <ReusableButton
        size="l"
        text="ENVIAR"
        disabled={!isValid}
      ></ReusableButton> */}
    </form>
  );
};

export default Register;