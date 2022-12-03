import { API } from "../../shared/services/api";

export const newUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "register_user_start" });
  try {
    console.log("Por encima de la ruta a la API");
    const result = await API.post("users/create", formdata);
    dispatch({ type: "register_user_ok" });
    // console.log(result);
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_user_error" });
  }
};

export const loginUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "login_user_start" });
  try {
    const result = await API.post("users/login", formdata);
    // console.log("Result: ", result);
    dispatch({ type: "login_user_ok", payload: result.data });
    localStorage.setItem("token", result.data.token);
    navigate("/");
  } catch (error) {
    dispatch({ type: "login_user_error", payload: error.message });
  }
};

export const checkSession = (token, navigate) => async (dispatch) => {
  // console.log("ESTOY EN LA FUNCION CHECKSESSION POR ENCIMA DEL DISPATCH");
  dispatch({ type: "checkSession_start" });
  // console.log("ESTOY EN LA FUNCION CHECKSESSION POR ENCIMA DEL TRY");
  try {
    // console.log("ESTOY DENTRO DEL TRY");

    const result = await API.post("users/checksession");
    // console.log("SACANDO RESULT", result);
    dispatch({
      type: "checkSession_ok",
      payload: { user: result.data, token: token },
    });
    localStorage.setItem("token", token);
    // console.log(result);
    navigate("/");
  } catch (error) {
    dispatch({ type: "checkSession_error" });
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  dispatch({ type: "logout_user_start" });
  try {
    dispatch({
      type: "logout_user_ok",
    });

    localStorage.clear();
    navigate("/");
  } catch (error) {
    dispatch({ type: "logout_user_error", payload: error.message });
  }
};
