import { API, API2 } from "../../shared/services/api";

export const getSpecialists = () => async (dispatch) => {
  dispatch({ type: "gettingSpecialists" });

  try {
    const result = await API.get("/specialists");
    dispatch({ type: "getSpecialists", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorSpecialists", payload: error.message });
  }
};

export const postSpecialists = (datos, navigate) => async (dispatch) => {
  dispatch({ type: "posttingSpecialists" });

  try {
    const result = await API2.post("specialists/create", datos);
    dispatch({ type: "postSpecialists", payload: result.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorSpecialists", payload: error.message });
  }
  
};

export const putSpecialists = (datos, navigate, id) => async (dispatch) => {
  dispatch({ type: "puttingSpecialists" });

  try {

    await API2.put(`specialists/edit/${id}`, datos);
    const userUpdate = await API.get (`specialists/${id}`);
    dispatch({ type: "putSpecialists", payload: userUpdate.data });
    navigate("/specialists");
  } catch (error) {
    dispatch({ type: "errorSpecialists", payload: error.message });
  }
  
};
