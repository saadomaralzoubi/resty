import "./form.css";

function Form() {
  return (
    <div className="form">
      <form>
        <label>URL: </label>
        <input
          type="text"
          placeholder="http://localhost:3000/"
          name="url"
          id="go"
        />

        <button type="submit">GO!</button>

        <div class="div-buttons">
          <button type="radio" value={`GET`} class="btn">
            GET
          </button>
          <button type="radio" value={`POST`} class="btn">
            {" "}
            POST
          </button>
          <button type="radio" value={`PUT`} class="btn">
            PUT
          </button>
          <button type="radio" value={`DELETE`} class="btn">
            {" "}
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
