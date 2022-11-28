import { AxiosResponse } from "axios";
import { call } from "redux-saga/effects";
import { request } from "../api/request";

export function* getCryptoListSaga() {
  try {
    const response: AxiosResponse<any> = yield call<typeof request>(request, {
      method: "GET",
      url: "https://open-api.coinglass.com/public/v2/funding",
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
