import { API, API2 } from "../../shared/services/api";

export const getCenters = () => async (dispatch) => {
  dispatch({ type: "gettingCenters" });

  try {
    const result = await API.get("/centers");
    dispatch({ type: "getCenters", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorCenters", payload: error.message });
  }
};

//Recoger un centro
export const getByIdCenters = (id) => async (dispatch) => {
  dispatch({ type: "gettingByIdCenters" });

  try {
    const getById = await API.get(`centers/${id}`);

    dispatch({ type: "getByIdCenters ", payload: getById.data });
  } catch (error) {
    dispatch({ type: "errorByIdCenters", payload: error.message });
  }
};

//Aniadir centro

export const postCenters = (datos, navigate) => async (dispatch) => {
  dispatch({ type: "postingCenters" });

  try {
    const result = await API2.post("centers/create", datos);
    dispatch({ type: "postCenters", payload: result.data });
    navigate("/centers");
  } catch (error) {
    dispatch({ type: "errorPostCenters", payload: error.message });
  }
};

//Modificar

export const putCenters = (data, navigate, id) => async (dispatch) => {
  dispatch({ type: "puttingCenters" });
  try {
    await API2.put(`centers/edit/${id}`, data);
    const centerUpdate = await API2.get("centers");
    dispatch({ type: "putCenters", payload: centerUpdate.data });
    navigate("/centers");
  } catch (error) {
    dispatch({ type: "errorPutCenters", payload: error.message });
  }
};

//Eliminar
export const deleteCenters = (id, navigate) => async (dispatch) => {
  dispatch({ type: "delettingCenters" });

  try {
    await API.delete(`centers/delete/${id}`);
    const newCenters = await API.get("/centers");
    dispatch({ type: "deleteCenters", payload: newCenters.data });
    navigate("/centers");
  } catch (error) {
    dispatch({ type: "errorDeleteCenters", payload: error.message });
  }
};
