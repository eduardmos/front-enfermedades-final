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
      case "puttingSpecialits":
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
        specialists: [...mySpecialits, action.payload],
      };
    case "errorPutSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [...mySpecialits],
        error: action.payload,
      };
      case "gettingByIdSpecialits":
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
        specialists: [...mySpecialits, action.payload],
      };
    case "errorGetByIdSpecialists":
      return {
        ...state,
        isLoading: false,
        specialists: [...mySpecialits],
        error: action.payload,
      };
      case "delettingSpecialits":
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
        specialists: [...mySpecialits, action.payload],
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
