import "./Results .sass";

import React from "react";

import JSONPretty from "react-json-pretty";

class Results extends React.Component {
  render() {
    return (
      <div className="result">
        <br></br>
        <section>{<JSONPretty data={this.props.data}></JSONPretty>}</section>
      </div>
    );
  }
}
export default Results;
