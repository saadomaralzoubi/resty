import React from "react";
import "./history.scss";

const History = (props) => {
  return (
    <div>
      <h2>History </h2>
      <ul className="Data">
        {props.history &&
          props.history.map((data, idx) => {
            return (
              <div key={idx}>
                <li>
                  Method: {data.method}
                  <br />
                  <b>URL: </b> {data.url}
                  <br />
               
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default History;
