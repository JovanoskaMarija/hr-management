import React from "react";
// import moment from "moment";
// import "font-awesome/css/font-awesome.min.css";
import { Radio, Input } from "antd";
import Calendar from "./Calendar";
import { AddAbsenceStyle, Modal } from "../style/AddAbsenceStyle";

class AddAbsence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absenceType: "vacation",
      modalVisible: false
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  onOk = () => {
    this.setState({ modalVisible: false });
  };

  onChangeAbsence = e => {
    this.setState({
      absenceType: e.target.value
    });
  };
  render() {
    console.log("absenceType", this.state.absenceType);
    return (
      <AddAbsenceStyle>
        <button className="add-holiday-button" onClick={this.showModal}>
          Add Holiday
        </button>
        <div>
          {this.state.modalVisible && (
            <Modal>
              <div className="modal-main">
                <p className="modal-header">Add Holiday</p>
                <Input
                  size="large"
                  placeholder="Holiday's name"
                  className="input"
                />
                <Calendar selectHoliday />
                <button onClick={this.onOk} className="add-holiday-button">
                  OK
                </button>
              </div>
            </Modal>
          )}
        </div>
        <div className="type-of-absence">
        <p className="title">Choose Absence Type</p>
          <Radio.Group
            defaultValue="vacation"
            onChange={this.onChangeAbsence}
            buttonStyle="solid"
          >
            <Radio.Button value="vacation">Vacation</Radio.Button>
            <Radio.Button value="sick_leave">Sick leave</Radio.Button>
            <Radio.Button value="work_from_home">Work from home</Radio.Button>
            <Radio.Button value="compassionate">Compassionate</Radio.Button>
            <Radio.Button value="parental_leave">Parental leave</Radio.Button>
          </Radio.Group>
        </div>
        <Calendar absence />
      </AddAbsenceStyle>
    );
  }
}

export default AddAbsence;
