import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import "../style/CalendarStyle.js";
import {CalendarWrapper} from '../style/CalendarStyle'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selectHoliday: "",
      start: "",
      end: "",
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

  getDatesDiff = (start_date, end_date, date_format = "D/MM/YYYY") => {
    const getDateAsArray = date => {
      return moment(date);
    };

    //.diff() redefined moment.js function for calculating range of dates between 2 dates
    const days =
      getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1;

    const dates = [];
    for (let i = 0; i < days; i++) {
      const nextDate = getDateAsArray(start_date).add(i, "day");
      const isWeekEndDay = nextDate.isoWeekday() > 5;
      if (!isWeekEndDay) {
        dates.push(nextDate.format(date_format));
      }
    }
    return dates;
  };
  select = day => {
    if (this.props.absence && !this.state.start) {
      this.setState(prevState => ({
        start: day.date
      }));
    } else if ( this.props.absence && !this.state.end) {
      this.setState({
        end: day.date
      });
    } else if( this.props.selectHoliday && !this.state.selectHoliday){
      this.setState({
        selectHoliday: day.date,
      })
    }
  };

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add(0, "w")
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();
    let date_log = [];
    date_log = this.getDatesDiff(this.state.start, this.state.end);
    // console.log("od calendar niza: ", date_log)
    const { selectHoliday, month, start, end } = this.state;
    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={day => this.select(day)}
          selectHoliday={selectHoliday}
          start={start}
          end={end}
          date_log={date_log}
        />
      );
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;
    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  resetDates = () => {
    this.setState({
      selectHoliday: "",
      start: "",
      end: ""
    });
  };

  render() {
    return (
      <CalendarWrapper absence = {this.props.absence}>
        {/* <div className="calendar-container"> */}
          <div className="calendar">
            <header className="calendar-header">
              <div className="month-display row">
                {this.renderMonthLabel()}
                <i className="arrow fa fa-angle-left" onClick={this.previous} />
                <i className="arrow fa fa-angle-right" onClick={this.next} />
              </div>
              <DayNames />
            </header>
            {this.renderWeeks()}
          </div>
          <div className="calendar-buttons-container">
            <button onClick={this.resetDates} className="calendar-button">
              Reset Selection
            </button>
            {this.props.selectHoliday ? " " : 
            <button onClick={this.chooseTypeOfAbsence} className="calendar-button" >
              Confirm Selection
            </button>
            }
          </div>
        {/* </div> */}
      </CalendarWrapper>
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

class Week extends React.Component {
  render() {
    let days = [];
    let { date } = this.props;

    const { month, selectHoliday, select, start, end, date_log } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        isWeekend:
          moment(date).format("dddd") === "Saturday" ||
          moment(date).format("dddd") === "Sunday",
        date: date
      };
      days.push(
        <Day
          key={day.date}
          day={day}
          selectHoliday={selectHoliday}
          select={select}
          start={start}
          end={end}
          date_log={date_log}
        />
      ); //denovi vo edna nedela
      date = date.clone(); // site devoni prikazani na kalendarot (e.g. 26jan - 29 feb)
      date.add(1, "day"); //eden den plus (e.g. 27jan -1 mart)
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
      day: { date, isCurrentMonth, isToday, isWeekend, number },
      select,
      selectHoliday,
      start,
      end,
      date_log
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={
          "day" +
          (isCurrentMonth ? "" : " different-month") +
          (isWeekend ? " weekend" : "") +
          (date.isSame(start) ? " selected" : "") +
          (date.isSame(end) ? " selected" : "") +
          (date.isSame(selectHoliday) ? " selected" : "") +
          (date_log.includes(day.date.format("D/MM/YYYY")) ? " selected" : "")+
          (isToday ? " today" : "") 
        }
        onClick={() => select(day)}
      >
        {number}
      </span>
    );
  }
}
export default Calendar;
