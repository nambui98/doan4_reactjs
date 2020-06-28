import React, { Component } from "react";
import { TableWrapper } from "../../../common/control.style";

class ComponentToPrint extends Component {
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
        title: "User",
        dataIndex: "User",
        className: "noWrapCell",
        key: "User",
        width: 150,
        render: (text, row) => {
          return <span>{row && row.admin ? row.admin.full_name : ""}</span>;
        }
      },
      {
        title: "Title",
        dataIndex: "Title",
        key: "Title",
        width: 200,
        render: (text, row) => {
          return (
            <span>{row && row.announcement ? row.announcement.title : ""}</span>
          );
        }
      },
      {
        title: "Type",
        dataIndex: "Announcement_type",
        key: "Announcement_type",
        className: "noWrapCell",
        width: 90,
        render: (text, row) => {
          return (
            <span>
              {row && row.announcement_type ? row.announcement_type.name : ""}
            </span>
          );
        }
      },
      {
        title: "Date",
        dataIndex: "Annouced_date",
        className: "noWrapCell",
        key: "Annouced_date",
        width: 90,
        render: (text, row) => {
          return (
            <span>
              {row && row.announcement
                ? row.announcement.announcement_date
                : ""}
            </span>
          );
        }
      },

      {
        title: "Description",
        dataIndex: "Description",
        key: "Description",
        render: (text, row) => {
          return (
            <div style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {row && row.announcement ? row.announcement.description : ""}
            </div>
          );
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
