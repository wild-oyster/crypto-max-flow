import { FunctionComponent } from "react";

export type NameCellProps = {
  symbol: string;
  logo: string;
};

const NameCell: FunctionComponent<NameCellProps> = ({ logo, symbol }) => {
  return (
    <div className="flex items-center space-x-4">
      <img width={40} height={40} src={logo} alt={`symbol-${symbol}`} />
      <div className="uppercase font-semibold text-gray-600">{symbol}</div>
    </div>
  );
};

export default NameCell;
