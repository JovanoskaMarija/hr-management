import React from "react";
import { Router, Link } from "@reach/router";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import MyProfile from "./components/MyProfile";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Login path="login" style={{width: "300px"}} />
        <Dashboard path="/" />
        <Calendar path="calendar" />
        <MyProfile path="profile" />
      </Router>
    </div>
  );
};

export default App;
