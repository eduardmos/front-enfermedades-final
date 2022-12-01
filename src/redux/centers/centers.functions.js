import{API} from "../../shared/services/api";

export const getCenters =()=> async (dispatch) => {
    dispatch({type:"gettingCenters"});

    try {
     const result = await API.get("/centers");
     dispatch({type:"getCenters",payload: result.data})   
    } catch (error) {
        dispatch({type:"errorCenters",payload: error.message});
    }
};
