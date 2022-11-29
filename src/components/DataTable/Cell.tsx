import { CryptoName } from "../../types/crypto/state";
import { FunctionComponent } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import NameCell from "./NameCell";

export type CellProps = {
  field: string;
  param: GridRenderCellParams<any>;
};

const Cell: FunctionComponent<CellProps> = ({ field, param }) => {
  if (field === "name") {
    const { logo, symbol } = param.value as CryptoName;

    return <NameCell logo={logo} symbol={symbol} />;
  }

  if (field === "price") {
    const price = param.value as number;
    return <div>{price}</div>;
  }

  return null;
};

export default Cell;
