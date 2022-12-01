import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import diseasesReducer from "./diseases/diseases.reducer";
import centersReducer from "./centers/centers.reducer";

const rootReducer = combineReducers({

    diseases: diseasesReducer, 
    centers: centersReducer, 
    auth: authReducer, 
}); 

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store; 

