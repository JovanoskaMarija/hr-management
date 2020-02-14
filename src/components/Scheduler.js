import React from "react";
import moment from "moment";
import "../style/calendar.css";
import "font-awesome/css/font-awesome.min.css";

class Scheduler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment()
    };
  }

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

  renderDaysInMonth() {
    let monthDays = [];
    let done = false;
    let date = this.state.month.clone().startOf("month");
    // .add("m", 1)
    // .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      monthDays.push(
        <MonthDays key={date} date={date.clone()} month={month} />
      );

      // date.add(-1, "w");
      date.add(1, "w");

      done = count++ && monthIndex !== date.month();
      monthIndex = date.month();
      // date = this.state.month.clone().endOf("month");
    }

    return monthDays;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <div>
          Maca
        </div>
        <div className="calendar">
          <header className="calendar-header">
            <div className="month-display row">
              {this.renderMonthLabel()}
              <i className="arrow fa fa-angle-left" onClick={this.previous} />
              <i className="arrow fa fa-angle-right" onClick={this.next} />
            </div>
            {/* <DayNames /> */}
          </header>
          {this.renderDaysInMonth()}
        </div>
      </div>
    );
  }
}

class DayNames extends React.Component {
  render() {
    return (
      <div className="row day-names">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day">Sat</span>
      </div>
    );
  }
}

class MonthDays extends React.Component {
  render() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let day = currentTime.getDate();
    let weekend = day === 0 || day === 1;
    console.log(weekend);
    let daysInMonth = () => {
      return 32 - new Date(currentYear, 1, 32).getDate();
    };

    // let x = daysInMonth();
    let x = 31;     // kako da prikaze za sekoj mesec soodvetno denovi 

    let days = [];

    let { date } = this.props;

    const { month, selected, select } = this.props;

    for (var i = 0; i < x; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      days.push(<Day day={day} selected={selected} select={select} />);

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const {
      day,
      day: { date, isCurrentMonth, isToday, number },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month") +
          (date.isSame(selected) ? " selected" : "")
        }
        // onClick={()=>select(day)}
      >
        {number}
      </span>
    );
  }
}
export default Scheduler;
