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
  .name-column {
    /* width: 300px; */
    display: flex;
    justify-content: left;
    color: red;
    margin-left: 10%;
  }
  .ant-table-thead > tr > th {
    border: none;
    background-color: transparent;
    text-align: center;
    padding: 5px 0;
    background-color: white;
    // color: purple;
    ${props => props.t.map(today => today.isToday ? console.log("Denes") : console.log("Nekoj drug den") )};
    color: ${props => props.t.map(today => today.isToday == true ? "purple": "")} ;
  }
  .ant-table .ant-table-tbody > tr > td {
    border-right: 1px solid #e8e8e8;
    border-bottom: none;
    text-align: center;
    padding: 5px 0;
  }
  .ant-table-column-title {
    margin: 0;
    padding: 2px;
    text-align: center;
    
    
  }
`;
