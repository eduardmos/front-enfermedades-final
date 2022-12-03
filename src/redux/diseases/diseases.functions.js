import { API, API2 } from "../../shared/services/api";

//Recoger todos los especialistas
export const getDiseases = () => async (dispatch) => {
  dispatch({ type: "gettingDiseases" });

  try {
    const result = await API.get("/diseases");
    dispatch({ type: "getDiseases", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorDiseases", payload: error.message });
  }
};

//Recoger un especialista
export const getByIdDiseases = (id) => async (dispatch) => {
  dispatch({ type: "gettingByIdDiseases" });

  try {
    // const result = await API.get(`/specialists`);
    const getById = await API.get(`/diseases/${id}`);
    // console.log(getById.data);
    dispatch({ type: "getByIdDiseases", payload: getById.data });
  } catch (error) {
    dispatch({ type: "errorGetByIdDiseases", payload: error.message });
  }
};

//Añadir un especialista
export const postDiseases = (datos, navigate) => async (dispatch) => {
  dispatch({ type: "postingDiseases" });

  try {
    const result = await API2.post("diseases/create", datos);
    dispatch({ type: "postDiseases", payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: "errorPostDiseases", payload: error.message });
  }
};

//Modificar un especialista
export const putDiseases = (data, navigate, id) => async (dispatch) => {
  dispatch({ type: "puttingDiseases" });
  // console.log(id);
  try {
    await API2.put(`diseases/edit/${id}`, data);

    const userUpdate = await API2.get("diseases");
    dispatch({ type: "putDiseases", payload: userUpdate.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: "errorPutDiseases", payload: error.message });
  }
};

//Eliminar especialista
export const deleteDiseases = (id, navigate) => async (dispatch) => {
  dispatch({ type: "delettingDiseases" });

  try {
    await API.delete(`diseases/delete/${id}`);
    const newDiseases = await API.get("/diseases");
    dispatch({ type: "deleteDiseases", payload: newDiseases.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: "errorDeleteDiseases", payload: error.message });
  }
};
