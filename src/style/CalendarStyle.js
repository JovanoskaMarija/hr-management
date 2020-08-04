import styled from "styled-components";

export const CalendarWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;


  .calendar-container {
    // max-width: 600px;
    // ${props => props.absence ? "width: 800px" : "width: 600px" }
    //  ${props=> props.selectHoliday ? "width: 600px" : "800px" }
    // margin: auto;
    // display: block;
  }
  .row {
    display: flex;
    width: 100%;
  }

  .title {
    display: block;
    font-size: 21px;
    font-weight: 600;
    padding-left: 10.5%;
  }
  .type-of-absence {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 3%;
  }
  .calendar {
    display: block;
    background: #ffffff;
    max-width: 500px;
    min-width: 300px;
    margin: 10px auto;
    /* box-shadow: 0 0 15px 0 #c0c0c0; */
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
  }
  .calendar .calendar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    cursor: default;
    font-size: 16px;
    display: block;
    font-weight: bold;
    user-select: none;
    border: none;
  }
  .calendar .calendar-header .month-display {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    /* background: #2875c7; */
    background: transparent;
    color: #cc2f37;
    /* border-bottom: 1px solid #cccccc; */
    /* border: none; */
    border-radius: 7px 7px 0 0;
  }
  .calendar .calendar-header .month-label {
    display: flex;
    justify-content: flex-start;
    margin-left: 23px;
    font-size: 20px;
    font-weight: 500;
    flex: 1;
  }
  .calendar .calendar-header .arrow {
    text-align: center;
    flex-basis: 15%;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar .calendar-header .arrow:hover {
    background: #efefef;
  }
  .calendar .week {
    border: none;
  }
  .calendar .day-names {
    color: #6b6b6b;
    font-weight: bold;
    cursor: default;
    font-size: 16px;
  }
  .calendar .day-names .day {
    cursor: default;
    color: #6b6b6b;
  }
  .calendar .day-names .day:hover {
    background: inherit;
  }
  .calendar .day {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 60px;
    border-left: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
    cursor: pointer;
    transition: all 0.4s;
  }
  .calendar .day:hover {
    background: #efefef;
  }
  .calendar .day:first-child {
    border-left: none;
  }

  .calendar .day.weekend {
    color: #cccccc;
    cursor: default;
  }
  .calendar .day.weekend:hover {
    background-color: transparent;
  }
  .calendar .day.today {
    /* background-color: rgba(204,47,55,1); */
    background-color: #cc2f37;
    color: white;
  }
  .calendar .day.different-month {
    color: #c0c0c0;
    cursor: default;
  }
  .calendar .day.different-month:hover {
    background-color: white;
  }
  .calendar .day.selected {
    box-sizing: border-box;
    background-color: #e1e1e1;
    color: #cc2f37;
    /* border: 1px solid white; */
  }
  .ant-modal-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: transparen;
    width: auto;
  }
  .calendar-buttons-container {
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .calendar-button {
    background-color: white;
    color: #6b6b6b;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    /* box-shadow: 0 0 15px 0 #c0c0c0; */
    border: 1px solid #cccccc;
    outline-style: none;
    cursor: pointer;
  }
  .calendar-button:active {
    box-shadow: inset -2px 2px 15px 10px rgba(204, 204, 204, 1);
  }
`;

/* .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: green;
  background: yellow;
  border-color: yellow;
} */
