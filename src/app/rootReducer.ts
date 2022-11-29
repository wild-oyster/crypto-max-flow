import { combineReducers } from "redux";
import cryptoReducers from "../reducers/cryptoSlice";

const rootReducer = combineReducers({
  crypto: cryptoReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
