import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PDF from "./Components/PDF";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home data={this.state.resumeData} />} />
          <Route path="cv" element={<PDF />} />
        </Routes>
      </div>
    );
  }
}

export default App;
