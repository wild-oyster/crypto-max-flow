import DataTable from "../../components/DataTable/DataTable";
import Header from "../../components/Header/Header";
import React from "react";
import { TabPanel } from "../../components/TabsSection/TabsSection";

const Homepage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header value={value} handleChange={handleChange} />
      <TabPanel value={value} index={0}>
        <DataTable />
      </TabPanel>
    </div>
  );
};

export default Homepage;
