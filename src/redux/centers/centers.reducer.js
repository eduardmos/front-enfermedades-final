const INITIAL_STATE = {
    centers: [],
    isLoading: false,
    error: false,
  };
  
  const centersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "gettingCenters":
        return {
          ...state,
          isLoading: true,
          error: false,
        };
      case "getCenters":
        return {
          ...state,
          isLoading: false,
          centers: action.payload,
          error: false,
        };
      case "errorCenters":
        return {
          ...state,
          isLoading: false,
          centers: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default centersReducer;
  