import "./Results .css";

import React from "react";

import JSONPretty from "react-json-pretty";

class Results extends React.Component {
  render() {
    return (
      <div className="result">
        <section>{<JSONPretty data={this.props.data}></JSONPretty>}</section>
      </div>
    );
  }
}
export default Results;
