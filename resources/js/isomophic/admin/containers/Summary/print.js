import React from "react";
import { TableWrapper } from "../../../common/control.style";

class ComponentToPrint extends React.Component {
  render() {
    const { rows } = this.props;
    const dataSource = [];
    if (rows) {
      Object.keys(rows).map((row, index) => {
        return dataSource.push({
          ...rows[row],
          key: row
        });
      });
    }
    const columns = [
      {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        className: "noWrapCell",
        sorter: (a, b) => {
          if (a.check_date < b.check_date) return -1;
          if (a.check_date > b.check_date) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row ? row.check_date : ""}</span>;
        }
      },
      {
        title: "Count",
        dataIndex: "Count",
        className: "noWrapCell",
        key: "Count",
        sorter: (a, b) => {
          if (a.count1 < b.count1) return -1;
          if (a.count1 > b.count1) return 1;
          return 0;
        },
        render: (text, row) => {
          return <span>{row ? row.count1 : ""}</span>;
        }
      }
    ];
    return (
      <TableWrapper
        rowKey="key"
        columns={columns}
        bordered={true}
        className="isoSimpleTable components-table-demo-nested tableReport"
        dataSource={dataSource}
        pagination={false}
        locale={{
          emptyText:
            this.props.isLoading === true ? (
              <div className="ant-spin ant-spin-spinning ant-table-with-pagination ant-table-spin-holder">
                <span className="ant-spin-dot ant-spin-dot-spin">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
            ) : (
              <span>No data</span>
            )
        }}
        // footer={() => (
        //     <div className="totalPrice clearfix">
        //         <div className="totalPriceItem hasBorder clearfix">
        //             <div className="w_50 karaoke_info text_bold">
        //                 TỔNG CỘNG :
        //             </div>
        //             <div className="w_50"><strong>{convertNumber(grandTotal)} đ</strong></div>
        //         </div>

        //     </div>
        // )}
      />
    );
  }
}

export default ComponentToPrint;
