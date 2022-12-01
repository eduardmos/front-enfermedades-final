const INITIAL_STATE = {
  specialists: [],
  isLoading: false,
  error: false,
};

const specialistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingSpecialists":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "getSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: action.payload,
        error: false,
      };
    case "errorSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default specialistsReducer;
