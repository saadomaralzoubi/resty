import "./form.css";

// function Form() {
//   return (
//     <div className="form">
//       <form>
//         <label>URL: </label>
//         <input
//           type="text"
//           placeholder="http://localhost:3000/"
//           name="url"
//           id="go"
//         />

//         <button type="submit">GO!</button>

//         <div class="div-buttons">
//           <button type="radio" value={`GET`} class="btn">
//             GET
//           </button>
//           <button type="radio" value={`POST`} class="btn">
//             {" "}
//             POST
//           </button>
//           <button type="radio" value={`PUT`} class="btn">
//             PUT
//           </button>
//           <button type="radio" value={`DELETE`} class="btn">
//             {" "}
//             DELETE
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;
import React from "react";
// import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "",
    };
  }

  urlClicker = (e) => {
    e.preventDefault();
    this.setState({
      url: this.state.input,
    });
  };
  handleUrl = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const method = e.target.method.value;
    this.setState({ url, method });

    let raw = await fetch(url);
    let data = await raw.json();

    const count = data.count;
    const results = data.results;

    this.props.handler(results, count);
  };

  changeMethod = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value });
  };

  render() {
    return (
      <main>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>URL: </label>
          <input
            type="text"
            placeholder="http://localhost:3000/"
            name="url"
            id="go"
          />

          <button type="submit">GO!</button>

          <div id="div-buttons">
            <button value={`GET`} onClick={this.changeMethod} class="btn">
              GET
            </button>
            <button value={`POST`} onClick={this.changeMethod} class="btn">
              POST
            </button>
            <button value={`PUT`} onClick={this.changeMethod} class="btn">
              PUT
            </button>
            <button value={`DELETE`} onClick={this.changeMethod} class="btn">
              DELETE
            </button>
          </div>
        </form>

        <div id="textarea">
          <span>
            {this.state.method} {this.state.url}
          </span>
        </div>
      </main>
    );
  }
}

export default Form;
