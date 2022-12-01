import { API } from "../../shared/services/api";

export const getSpecialists = () => async (dispatch) => {
  dispatch({ type: "gettingSpecialists" });

  try {
    const result = await API.get("/specialists");
    dispatch({ type: "getSpecialists", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorSpecialists", payload: error.message });
  }
};
