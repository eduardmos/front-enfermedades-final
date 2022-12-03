const INITIAL_STATE = {
  centers: [],
  center: {},
  isLoading: false,
  error: false,
};

const centersReducer = (state = INITIAL_STATE, action) => {
  const myCenters = state.centers;
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

    case "gettingByIdCenters":
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case "getByIdCenters":
      return {
        ...state,
        isLoading: false,
        error: false,
        center: action.payload,
      };

    case "errorByIdCenters":
      return {
        ...state,
        isLoading: false,
        centers: [...myCenters],
        error: action.payload,
      };

    case "postingCenters":
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case "postCenters":
      return {
        ...state,
        isLoading: true,
        error: false,
        centers: [...myCenters, action.payload],
      };

    case "errorPostCenters":
      return {
        ...state,
        isLoading: false,
        centers: [...myCenters],
        error: action.payload,
      };

    case "puttingCenters":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "putCenters":
      return {
        ...state,
        isLoading: false,
        error: false,
        centers: [...action.payload],
      };
    case "errorPutCenters":
      return {
        ...state,
        isLoading: false,
        centers: [...myCenters],
        error: action.payload,
      };
    case "delettingCenters":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "deleteCenters":
      return {
        ...state,
        isLoading: false,
        error: false,
        centers: [...action.payload],
      };
    case "errorDeleteCenters":
      return {
        ...state,
        isLoading: false,
        centers: [...myCenters],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default centersReducer;
