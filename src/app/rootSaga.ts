import { all } from "redux-saga/effects";

export default function* rootSaga() {
  try {
    yield all([]);
  } catch (error) {
    console.log("root saga", error);
  }
}
