import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/body/Results ";
import axios from "axios";
export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async (requestParams) => {
    setRequest(requestParams);

    let methodCall = requestParams.method.toLowerCase();
    setIsLoading(true);
    const response = await axios[methodCall](
      requestParams.url,
      requestParams.body ? requestParams.body : null
    );
    const result = {
      headers: {
        headers: response.headers,
        results: response.data,
      },
    };

    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    if (requestParams !== null) return;
    handleApiCall(requestParams);
  }, [requestParams]);
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <Form handleApiCall={handleApiCall} />
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <Results
            data={data}
            url={requestParams.url}
            method={requestParams.method}
          />
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}
