import React, { useState } from "react";
import "./form.sass";
export default function Form(props) {
  const [url, setUrl] = useState();
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState();
  const handleMethod = (event) => {
    let elems = document.querySelectorAll("span");
    elems.forEach(
      (elem) => (elem.style.backgroundColor = "rgb(175, 176, 182)")
    );
    document.getElementById(`${event.target.id}`).style.backgroundColor =
      "white";
    setMethod(event.target.id);
  };
  const handleBody = (event) => {
    event.preventDefault();
    let newBody = event.target.value;
    setBody(newBody);
  };
  const handleURL = (event) => {
    event.preventDefault();
    let newURL = event.target.value;
    setUrl(newURL);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: null,
    };
    if (body) formData.body = body;
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>
            <label className="methods">
              <span data-testid="GET" id="GET" onClick={handleMethod}>
                GET
              </span>
              <span id="POST" onClick={handleMethod}>
                POST
              </span>
              <span id="PUT" onClick={handleMethod}>
                PUT
              </span>
              <span id="DELETE" onClick={handleMethod}>
                DELETE
              </span>
            </label>
            <input name="url" type="text" onChange={handleURL} />
            <button type="submit"> {method} </button>
          </label>
        </div>

        <div>
          <div className="flex flex-col">
            <label htmlFor="json" id="h"> Json</label>
            <textarea
              onChange={handleBody}
              type="textarea"
              id="text"
              defaultValue="{}"
            />
          </div>
        </div>
      </form>
    </>
  );
}
