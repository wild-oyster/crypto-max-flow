import { all } from "redux-saga/effects";
import { watcherSaga } from "../sagas/watcherSaga";

export default function* rootSaga() {
  try {
    yield all([watcherSaga()]);
  } catch (error) {
    console.log("root saga", error);
  }
}
