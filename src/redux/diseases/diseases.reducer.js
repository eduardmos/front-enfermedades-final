const INITIAL_STATE = {
  diseases: [],
  disease: {},
  isLoading: false,
  error: false,
};

const diseasesReducer = (state = INITIAL_STATE, action) => {
  const myDiseases = state.diseases;
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

    case "gettingByIdDiseases":
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case "getByIdDiseases":
      return {
        ...state,
        isLoading: false,
        error: false,
        disease: action.payload,
      };

    case "errorGetByIdDiseases":
      return {
        ...state,
        isLoading: false,
        diseases: [...myDiseases],
        error: action.payload,
      };

    case "postingDiseases":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "postDiseases":
      return {
        ...state,
        isLoading: false,
        error: false,
        diseases: [...myDiseases, action.payload],
      };
    case "errorPostSpecialists":
      return {
        ...state,
        isLoading: false,
        diseases: [...myDiseases],
        error: action.payload,
      };

    case "puttingDiseases":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "putDiseases":
      return {
        ...state,
        isLoading: false,
        error: false,
        diseases: [...action.payload],
      };
    case "errorPutDiseases":
      return {
        ...state,
        isLoading: false,
        diseases: [...myDiseases],
        error: action.payload,
      };

    case "delettingDiseases":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "deleteDiseases":
      return {
        ...state,
        isLoading: false,
        error: false,
        diseases: [...action.payload],
      };
    case "errorDeleteDiseases":
      return {
        ...state,
        isLoading: false,
        diseases: [...myDiseases],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default diseasesReducer;
