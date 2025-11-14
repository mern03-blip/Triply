import { Table } from "antd";
import "./Table.scss"

const CustomTable = ({
  columns = [],
  dataSource = [],
  rowKey = "id",
  loading = false,
  className = "",
  tableProps = {},
}) => {
  return (
    <div
      className={`${className}`}
    >
      <div className="min-w-full">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={rowKey}
          loading={loading}
          pagination={false} 
          className="w-full"
          {...tableProps}
        />
      </div>
    </div>
  );
};

export default CustomTable;
