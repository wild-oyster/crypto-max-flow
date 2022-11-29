import { Column, Row } from "../types/crypto/state";
import { call, put } from "redux-saga/effects";

import { AxiosResponse } from "axios";
import { CryptoResponse } from "../types/crypto";
import { log } from "console";
import { request } from "../api/request";
import { setCryptoDataTable } from "../reducers/cryptoSlice";

export function* getCryptoListSaga() {
  try {
    const response: AxiosResponse<CryptoResponse> = yield call<typeof request>(
      request,
      {
        method: "GET",
        url: "https://open-api.coinglass.com/public/v2/funding",
      }
    );

    const rows: Row[] = response.data.data.map((crypto, index) => {
      const exchanges: {
        [key: string]: number;
      } = {};

      crypto.uMarginList.forEach((exchange) => {
        exchanges[exchange.exchangeName] = exchange.rate;
      });

      return {
        id: index,
        name: {
          logo: crypto.symbolLogo,
          symbol: crypto.symbol,
        },
        price: crypto.uPrice,
        ...exchanges,
      };
    });

    const exchangeFields: Column[] = response.data.data[0].uMarginList.map(
      (exchange) => {
        return { field: exchange.exchangeName };
      }
    );

    const columns: Column[] = [
      { field: "id" },
      { field: "name" },
      { field: "price" },
      ...exchangeFields,
    ];

    yield put(setCryptoDataTable({ rows, columns }));
  } catch (error) {
    console.error(error);
  }
}
