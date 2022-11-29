import TabsSection, { TabsSectionProps } from "../TabsSection/TabsSection";

import { FunctionComponent } from "react";

const Header: FunctionComponent<TabsSectionProps> = ({
  handleChange,
  value,
}) => {
  return (
    <div>
      <p className="text-gray-600">In the past 24 hours</p>
      <h1 className="text-3xl font-bold">
        Market is up{" "}
        <b className="text-lime-700 text-2xl font-semi-bold">2.49%</b>
      </h1>

      <TabsSection handleChange={handleChange} value={value} />
    </div>
  );
};

export default Header;
