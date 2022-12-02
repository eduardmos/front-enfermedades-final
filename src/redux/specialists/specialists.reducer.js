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
    case "errorGetSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [],
        error: action.payload,
      };

    case "gettingByIdSpecialists":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "getByIdSpecialists":
      return {
        ...state,
        isLoading: false,
        error: false,
        specialists: [action.payload],
      };
    case "errorGetByIdSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [...mySpecialits],
        error: action.payload,
      };

    case "postingSpecialists":
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

    case "puttingSpecialists":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "putSpecialists":
      return {
        ...state,
        isLoading: false,
        error: false,
        specialists: [...action.payload],
      };
    case "errorPutSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [...mySpecialits],
        error: action.payload,
      };

    case "delettingSpecialists":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "deleteSpecialists":
      return {
        ...state,
        isLoading: false,
        error: false,
        specialists: [...action.payload],
      };
    case "errorDeleteSpecialists":
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
