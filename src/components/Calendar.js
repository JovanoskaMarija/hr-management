import React from "react";
import moment from "moment";
import "../style/calendar.css";
import "font-awesome/css/font-awesome.min.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selected: "",
      start: "",
      end: ""
      // selected: moment().format("YYYY-MM-DD"),
      // start: moment().format("YYYY-MM-DD"),
      // end: moment().format("YYYY-MM-DD")
      // selected: moment().startOf("day"),
      // start: moment().add(1,"day"),
      // end: moment().add(10, "day")
    };

    // this.previous = this.previous.bind(this);
    // this.next = this.next.bind(this);
  }

  previous = () => {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month")
    });
  }

  next = () =>  {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month")
    });
  }

  select = (day) =>  {
    // this.setState({
    //   selected: day.date,
    //   month: day.date.clone()
    // }, console.log(day.date));
    if (!this.state.start) {
      
      this.setState({
        selected: day.date,
        start: day.date,
        // end: moment().format("YYYY-MM-DD")
      });
    } else if(!this.state.end){
      this.setState({
        selected: day.date,
        end: day.date
      });
      
    }
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w", 0)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={day => this.select(day)}
          selected={selected}
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
      selected: '',
      start: '',
      end: ''
    });
    console.log(this.state.start, this.state.end)
  }

  render() {
    // function getRangeOfDates(start, end, key, arr = [start.startOf(key)]) {
    //   if (start.isAfter(end)) throw new Error("start must precede end");
    //   const next = moment(start)
    //     .add(1, key)
    //     .startOf(key);

    //   if (next.isAfter(end, key)) return arr;

    //   return getRangeOfDates(next, end, key, arr.concat(next));
    // }
    // const begin = this.state.start
    // const end = this.state.end
    // console.log(getRangeOfDates(begin, end, "day"));

    const getDatesDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
      const getDateAsArray = date => {
        return moment(date);
      };
      const diff =
        getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1;
      const dates = [];
      for (let i = 0; i < diff; i++) {
        const nextDate = getDateAsArray(start_date).add(i, "day");
        const isWeekEndDay = nextDate.isoWeekday() > 5;
        if (!isWeekEndDay) dates.push(nextDate.format(date_format));
      }
      return dates;
    };

    // const date_log = getDatesDiff("2020-01-10", "2020-01-25");

    const date_log = getDatesDiff(this.state.start, this.state.end);
    console.log(date_log);
    console.log("Selected: ",this.state.selected)
      console.log("Start: ",this.state.start)
       console.log("End: ",this.state.end)

    return (
      <div className="calendar-container">
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
        <div className="calendar-buttons">
          <button onClick={this.resetDates}>Reset</button>
          <button>Confirm</button>
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

class Week extends React.Component {
  render() {
    let days = [];
    let { date } = this.props;

    const { month, selected, select } = this.props;

    for (var i = 0; i < 7; i++) {
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
        onClick={() => select(day)}
      >
        {number}
      </span>
    );
  }
}
export default Calendar;

// import React from "react";

// import Timeline, { TimelineMarkers, TodayMarker, CustomMarker } from "react-calendar-timeline";
// import moment from "moment";
// import "react-calendar-timeline/lib/Timeline.css";
// import '../style/calendar.css'
// const groups = [
//   { id: 1, title: "Viki", backgroundColor: "red" },
//   { id: 2, title: "Nikola" },
//   { id: 3, title: "Zoran" },
//   { id: 4, title: "Marija" },
//   { id: 5, title: "Kire" },
//   { id: 6, title: "Vladimir" }
// ];

// const items = [
//   {
//     id: 1,
//     group: 1,
//     start_time: moment().add(6, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(7, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 2,
//     group: 2,
//     start_time: moment().add(1, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(6, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 3,
//     group: 1,
//     start_time: moment().add(-2, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(3, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 4,
//     group: 4,
//     start_time: moment().add(-4, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(-2, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 5,
//     group: 5,
//     bgColor : 'rgba(225, 166, 244, 0.6)',
//     start_time: moment().add(0, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(1, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 6,
//     group: 6,
//     background_color: "green",
//     start_time: moment().add(-7, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(-5, "day").hours(0).minutes(0).seconds(0)
//   },
//   {
//     id: 7,
//     group: 3,
//     start_time: moment().add(1, "day").hours(0).minutes(0).seconds(0),
//     end_time: moment().add(3, "day").hours(0).minutes(0).seconds(0)
//   }
// ];

// const onItemSelect = (item) => {
//   console.log("Selected: " + item);
// }
// const twoSeconds = 2000
// const today = Date.now()
// const Calendar = () => {
//   return (
//     <div >
//       <p>Calendar</p>
//         <Timeline
//           groups={groups}
//           items={items}
//           defaultTimeStart={moment().startOf('month')}
//           defaultTimeEnd={moment().endOf('month')}
//           canMove={false}
//           canResize={true}
//           itemTouchSendsClick={false}
//           itemHeightRatio={0.75}
//           onItemSelect={onItemSelect}
//           bgColor={"red"}
//         >
//           <TimelineMarkers>
//             <TodayMarker />
//             {/* <CustomMarker date={3} style={{backgroundColor: "blue"}} /> */}
//             {/* <CustomMarker date={today}>
//                 {({ styles, date }) => {
//                   const customStyles = {
//                     ...styles,
//                     backgroundColor: 'deeppink',
//                     width: '4px'
//                   }
//                     return <div />
//                 }}
//     </CustomMarker> */}
//           </TimelineMarkers>
//         </Timeline>

//     </div>
//   );
// };

// export default Calendar;
