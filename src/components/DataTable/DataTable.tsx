import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import Cell from "./Cell";
import { RootState } from "../../app/rootReducer";
import { useSelector } from "react-redux";

const DataTable = () => {
  const data = useSelector((state: RootState) => state.crypto.dataTable);

  if (!data) return null;

  const columns: GridColDef[] = data.columns.map((column) => {
    return {
      field: column.field,
      headerName: column.field,
      renderCell: (param: GridRenderCellParams<any>) => (
        <Cell field={column.field} param={param} />
      ),
    };
  });

  // [
  //   { field: "id", headerName: "ID", width: 70 },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     width: 200,
  //     renderCell: (props: GridRenderCellParams<any>) => {
  //       return <NameCell {...props.value} />;
  //     },
  //   },
  // ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rowHeight={100}
        rows={data.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick={false}
        disableColumnMenu={true}
      />
    </div>
  );
};

export default DataTable;
