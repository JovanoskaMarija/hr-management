import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .month-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15%;
    font-size: 25px;
  }
  .month-info {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  .arrow-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 10%;
  }
`;

export const TableScheduler = styled.div`
  box-sizing: "border-box";
  width: "100%";
  margin: "auto";
  
  .ant-table-thead > tr > th {
    border: none;
    background-color: transparent;
    text-align: center;
    padding: 5px 0;
    background-color: white;
  }
  .date-column {
    color: red;
  }
  .ant-table .ant-table-tbody > tr > td {
    // border-right: 1px solid #e8e8e8;
    border-right: 1px solid rgba(183, 173, 172, 0.1);
    border-bottom: none;
    text-align: center;
    padding: 5px 0;
    // color: red;
    // background-color: yellow
  }
  .ant-table .ant-table-tbody > tr > td:first-child {
    text-align: left;
    padding: 10px;
  }
  .ant-table-column-title {
    margin: 0;
    padding: 2px;
    text-align: center;
  }
  .today {
    background-color: #faf2f3;
  }
  .today .ant-table-column-title {
    color: white;
    font-weight: 700;
    background-color: #cc2f37;
    border-radius: 50%;
  }
  .not-today {
    color: black;
    text-transform: capitalize;
    text-align: left;
  }
  .weekend {
    background-color: rgba(183, 173, 172, 0.05);
  }
  .weekend .ant-table-column-title {
    color: rgba(183, 173, 172, 0.4);
    border-radius: 50%;
  }
  .not-weekend {
    color: yellow;
    background-color: lawngreen;
  }
`;
