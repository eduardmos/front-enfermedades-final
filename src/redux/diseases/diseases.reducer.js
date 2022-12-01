const INITIAL_STATE = {
  diseases: [],
  isLoading: false,
  error: false,
};

const diseasesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingDiseases":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "getDiseases":
      return {
        ...state,
        isLoading: false,
        diseases: action.payload,
        error: false,
      };
    case "errorDiseases":
      return {
        ...state,
        isLoading: false,
        diseases: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default diseasesReducer;
