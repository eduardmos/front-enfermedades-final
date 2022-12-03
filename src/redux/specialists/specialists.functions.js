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
    // console.log(getById.data);
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
export const putSpecialists = (data, navigate, id) => async (dispatch) => {
  dispatch({ type: "puttingSpecialists" });
  // console.log(id);
  try {
    console.log(data);
    await API2.put(`specialists/edit/${id}`, data);
    console.log("Aqui creo que no");
    const userUpdate = await API2.get("specialists");
    dispatch({ type: "putSpecialists", payload: userUpdate.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorPutSpecialists", payload: error.message });
  }
};

//Eliminar especialista
export const deleteSpecialists = (id, navigate) => async (dispatch) => {
  dispatch({ type: "delettingSpecialists" });

  try {
    await API.delete(`specialists/delete/${id}`);
    const newSpecialists = await API.get("/specialists");
    dispatch({ type: "deleteSpecialists", payload: newSpecialists.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorDeleteSpecialists", payload: error.message });
  }
};
