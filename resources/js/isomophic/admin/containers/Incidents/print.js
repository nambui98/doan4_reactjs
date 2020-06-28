import React from "react";
import { TableWrapper } from "../../../common/control.style";
import helperFunc from "../../../helpers/helperFunc";

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
      // {
      //     title: 'STT',
      //     dataIndex: 'id',
      //     key: 'id',
      //     align: 'center',
      //     width: 30,
      //     className: 'noWrapCell',
      //     render: (text, row, index) => {
      //         return <span>{index + 1}</span>
      //     }
      // },
      {
        title: "User",
        dataIndex: "created_by",
        className: "noWrapCell",
        key: "created_by",
        render: (text, row) => {
          return <span>{row && row.admin ? row.admin.full_name : ""}</span>;
        }
      },
      {
        title: "Reported on",
        dataIndex: "reported_on",
        className: "noWrapCell",
        key: "reported_on",
        render: (text, row) => {
          return <span>{row ? row.reported_on : ""}</span>;
        }
      },
      {
        title: "Incident date",
        dataIndex: "incident_date",
        className: "noWrapCell",
        key: "incident_date",
        render: (text, row) => {
          return <span>{row ? row.incident_date : ""}</span>;
        }
      },
      {
        title: "Any injury",
        dataIndex: "is_any_injury",
        className: "noWrapCell",
        key: "is_any_injury",
        render: (text, row) => {
          return (
            <span>
              {row && row.is_any_injury === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </span>
          );
        }
      },
      {
        title: "SAS Report",
        dataIndex: "is_SAS_report",
        className: "noWrapCell",
        key: "is_SAS_report",
        width: 90,

        render: (text, row) => {
          return (
            <span>
              {row && row.is_SAS_report === helperFunc.yesNo.Yes
                ? helperFunc.yesNo.properties[helperFunc.yesNo.Yes]
                : helperFunc.yesNo.properties[helperFunc.yesNo.No]}
            </span>
          );
        }
      },
      {
        title: "Type",
        dataIndex: "incident_type",
        className: "noWrapCell",
        key: "incident_type",
        render: (text, row) => {
          return (
            <span>
              {row && row.incident_type ? row.incident_type.name : ""}
            </span>
          );
        }
      },
      {
        title: "Severity",
        dataIndex: "incident_severity",
        className: "noWrapCell",
        key: "incident_severity",
        render: (text, row) => {
          return (
            <span>
              {row && row.incident_severity ? row.incident_severity.name : ""}
            </span>
          );
        }
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        render: (text, row) => {
          return <div>{row ? row.description : ""}</div>;
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
