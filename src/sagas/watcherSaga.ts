import { getCryptoList } from "../reducers/cryptoSlice";
import { getCryptoListSaga } from "./getCryptoListSaga";
import { takeLatest } from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest(getCryptoList.type, getCryptoListSaga);
}
