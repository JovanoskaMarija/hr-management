import React from "react";
import moment from "moment";
import "../style/scheduler.css";
import "font-awesome/css/font-awesome.min.css";
import { Table } from "antd";



const data = [
  {
    key: "1",
    name: "John Brown",
    '2/2/2020': "x",
    "23/2/2020": "x",
    "14/2/2020": "x",
    "3/3/2020": "x"
  },
  {
    key: "2",
    name: "Jim Green",
    '12/2/2020': "x",
    "6/2/2020": "x",
    "24/2/2020": "x",
    "13/3/2020": "x"
  },
  {
    key: "3",
    name: "Joe Black",
    '8/2/2020': "x",
    "1/2/2020": "x",
    "14/2/2020": "x",
    "23/3/2020": "x"
  }
];

class Scheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      month: moment()
    };
  }

  monthDays = () => {
    return this.state.month.clone().daysInMonth(); // dava denovi za tekovniot mesec
  };

  daysInCurrentMonth = [];
  days = () => {
    let x = this.monthDays();
    let currentMonth = [{
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: 'left',
      // width: "auto"
    }]
    for (let i = 1; i <= x; i++) {
      let obj = {};
      obj.key = (i + "/"+ this.state.month.format("M/YY"));
      obj.title = i;
      obj.dataIndex = (i + "/" + this.state.month.format("M/YYYY"));
      currentMonth.push(obj);

      this.daysInCurrentMonth = [...currentMonth]
    }
  };
  previous = () => {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month")
    });
  };

  next = () => {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month")
    });
  };
  render() {
    this.days();
    console.log(this.state.month.format("MMMM"));
    console.log(this.daysInCurrentMonth);
    return (
      <div>
        <span>{this.state.month.format("MMMM")}</span>
        <span>
          <i className="arrow fa fa-angle-left" onClick={this.previous} />
        </span>
        <span>
          <i className="arrow fa fa-angle-right" onClick={this.next} />
        </span>
        <Table
          columns={this.daysInCurrentMonth}
          dataSource={data}
          style={{ boxSizing: "border-box", width: "90%", margin: "auto" }}
          pagination={false}
          bordered={false}
          scroll={{ x: 1000}}
        />
        <p>Month Selected: {this.state.month.format("MMMM")}</p>
        <p>days in current month: {this.monthDays()}</p>
      </div>
    );
  }
}
export default Scheduler;
