const INITIAL_STATE = {
  specialists: [],
  isLoading: false,
  error: false,
};

const specialistsReducer = (state = INITIAL_STATE, action) => {
  const mySpecialits = state.specialists;
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

    case "postingSpecialits":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "postSpecialists":
      return {
        ...state,
        isLoading: false,
        error: false,
        specialists: [...mySpecialits, action.payload],
      };
    case "errorPostSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [...mySpecialits],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default specialistsReducer;
