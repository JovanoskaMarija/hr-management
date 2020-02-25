import React from "react";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import "../style/calendar.css";
import { Radio, Modal, Button, Input, DatePicker } from "antd";
import Calendar from './Calendar'
class AddAbsence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      absenceType: "",
      modalVisible: false
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  handleOk = () => {
    this.setState({ modalVisible: false });
  };

  onChangeAbsence = e => {
    this.setState({
      absenceType: e.target.value
    });
  };
  render() {
    // console.log("absenceType", this.state.absenceType);
    console.log()
    return (
      <div>
        <p>Add Absence</p>
        <div>
          <button className="calendar-button" onClick={this.showModal}>
            Add Holiday
          </button>
          <Modal
            title="Add Holiday"
            closable={true}
            width={400}
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleOk}
          >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
              <Input placeholder="Holiday's name"  />
              <Calendar selectHoliday />
            </div>
          </Modal>
        </div>
        <div>
          <p className="title" style={{ display: "block" }}>
            Choose Absence Type
          </p>
        </div>
        <div className="type-of-absence">
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
      </div>
    );
  }
}

export default AddAbsence;
