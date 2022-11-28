export type Crypto = {
  uMarginList: MarginList[];
  symbol: string;
  cMarginList: MarginList[];
  uIndexPrice: number;
  uPrice: number;
  cPrice: number;
  symbolLogo: string;
  cIndexPrice: number;
  status: number;
};

export type CryptoResponse = {
  code: string;
  data: Crypto[];
  msg: string;
  success: boolean;
};

export type MarginList = {
  rate: number;
  nextFundingTime: number;
  exchangeName: string;
  echangeLogo: string;
  status: number;
};
