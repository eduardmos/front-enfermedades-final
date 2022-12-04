import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/auth.actions";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  // console.log(process.env.REACT_APP_BACK_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (formdata) => {
    dispatch(loginUser(formdata, navigate));
  };

  return (
    <div className="form-login">
    <form className="form--box" onSubmit={handleSubmit(login)}>
      <label>
        <h6>Email</h6>
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 2,
              message: "El email tiene que ser más largo",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Introduce un email con formato válido",
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
        <h6>Password</h6>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "El password tiene que existir",
          })}
        />
      </label>
      {errors.password ? <p>El password no es correcto</p> : null}

      <button disabled={!isValid}>Enviar</button>
    </form>
    </div>
  );
};

export default Login;
