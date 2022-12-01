import{API} from "../../shared/services/api";

export const getDiseases =()=> async (dispatch) => {
    dispatch({type:"gettingDiseases"});

    try {
     const result = await API.get("/diseases");
     dispatch({type:"getDiseases",payload: result.data})   
    } catch (error) {
        dispatch({type:"errorDiseases",payload: error.message});
    }
};
