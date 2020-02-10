import React from "react";

import Timeline, { TimelineMarkers, CustomMarker } from "react-calendar-timeline";
import moment from "moment";
import "react-calendar-timeline/lib/Timeline.css";
import '../style/calendar.css'
const groups = [
  { id: 1, title: "Viki", backgroundColor: "red" },
  { id: 2, title: "Nikola" },
  { id: 3, title: "Zoran" },
  { id: 4, title: "Marija" },
  { id: 5, title: "Kire" },
  { id: 6, title: "Vladimir" }
];

const items = [
  {
    id: 1,
    group: 1,
    start_time: moment().add(6, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(7, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 2,
    group: 2,
    start_time: moment().add(1, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(6, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 3,
    group: 1,
    start_time: moment().add(-2, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(3, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 4,
    group: 4,
    start_time: moment().add(-4, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(-2, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 5,
    group: 5,
    bgColor: "red",
    start_time: moment().add(0, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(1, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 6,
    group: 6,
    background_color: "green",
    start_time: moment().add(-7, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(-5, "day").hours(0).minutes(0).seconds(0)
  },
  {
    id: 7,
    group: 3,
    start_time: moment().add(1, "day").hours(0).minutes(0).seconds(0),
    end_time: moment().add(3, "day").hours(0).minutes(0).seconds(0)
  }
];

const onItemSelect = (item) => {
  console.log("Selected: " + item);
}

const Calendar = () => {
  return (
    <div >
      <p>Calendar</p>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().startOf('month')}
          defaultTimeEnd={moment().endOf('month')}
          canMove={false} 
          canResize={true}
          itemTouchSendsClick={false}
          itemHeightRatio={0.75}
          onItemSelect={onItemSelect}
        >
          <TimelineMarkers>
            <CustomMarker date={Date.now()} />
          </TimelineMarkers>
        </Timeline>

    </div>
  );
};

export default Calendar;
