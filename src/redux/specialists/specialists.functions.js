import { API, API2 } from "../../shared/services/api";

//Recoger todos los especialistas
export const getSpecialists = () => async (dispatch) => {
  dispatch({ type: "gettingSpecialists" });

  try {
    const result = await API.get("/specialists");
    dispatch({ type: "getSpecialists", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorGetSpecialists", payload: error.message });
  }
};

//Recoger un especialista
export const getByIdSpecialists = (id) => async (dispatch) => {
  dispatch({ type: "gettingByIdSpecialists" });

  try {
    // const result = await API.get(`/specialists`);
    const getById = await API.get(`/specialists/${id}`);
    console.log(getById.data);
    dispatch({ type: "getByIdSpecialists", payload: getById.data });
  } catch (error) {
    dispatch({ type: "errorGetByIdSpecialists", payload: error.message });
  }
};

//Añadir un especialista
export const postSpecialists = (datos, navigate) => async (dispatch) => {
  dispatch({ type: "postingSpecialists" });

  try {
    const result = await API2.post("specialists/create", datos);
    dispatch({ type: "postSpecialists", payload: result.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorPostSpecialists", payload: error.message });
  }
};

//Modificar un especialista
export const putSpecialists = (datos, navigate, id) => async (dispatch) => {
  dispatch({ type: "puttingSpecialists" });

  try {
    await API2.put(`specialists/edit/${id}`, datos);
    const userUpdate = await API.get(`specialists/${id}`);
    dispatch({ type: "putSpecialists", payload: userUpdate.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorPutSpecialists", payload: error.message });
  }
};

//Eliminar especialista
export const deleteSpecialists = (datos, navigate, id) => async (dispatch) => {
  dispatch({ type: "delettingSpecialists" });

  try {
    await API2.put(`specialists/delete/${id}`, datos);
    const userUpdate = await API.get(`specialists/${id}`);
    dispatch({ type: "deleteSpecialists", payload: userUpdate.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorDeleteSpecialists", payload: error.message });
  }
};
