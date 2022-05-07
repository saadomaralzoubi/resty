import React, { useState } from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/body/Results ";
import axios from "axios";
export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const handleApiCall = async (requestParams) => {
    setRequest(requestParams);
    let methodCall = requestParams.method.toLowerCase();
    const response = await axios[methodCall](
      requestParams.url,
      requestParams.body ? requestParams.body : null
    );
    const result = {
      results: response.data,
    };

    setData(result);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <Form handleApiCall={handleApiCall} />
        <Results
          data={data}
          url={requestParams.url}
          method={requestParams.method}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}
