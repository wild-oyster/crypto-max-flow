import { CryptoState, DataTable } from "../types/crypto/state";
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "../types/crypto/intialState";

export const cryptoSlice = createSlice({
  initialState: initialState as CryptoState,
  name: "crypto",
  reducers: {
    setCryptoDataTable: (state, action: PayloadAction<DataTable>) => {
      state.dataTable = action.payload;
    },
  },
});

export const { setCryptoDataTable } = cryptoSlice.actions;

export const getCryptoList = createAction("crypto/getCryptoList");

export default cryptoSlice.reducer;
