export type CryptoState = {
  dataTable: DataTable | null;
};

export type CryptoName = {
  logo: string;
  symbol: string;
};

export type DataTable = {
  rows: Row[];
  columns: Column[];
};

export type Column = {
  field: string;
};

export type Row = {
  [key: string]: any;
  id: number;
  price: number;
  name: CryptoName;
};
