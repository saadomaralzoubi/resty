import React, { useState, useEffect, useReducer } from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/body/Results ";
import History from "./components/history/history";
import axios from "axios";

const initialState = {
  request: [],
};


const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "newHistory":
      const request = [...state.request, payload];
      return { request };
    default:
      return state;
  }
};

const newDataSearch = (requestParams, data) => {
  return {
    type: "newHistory",
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      resultData: data,
    },
  };
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
    dispatch(newDataSearch(requestParams, result));

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
        <History
          data={data}
          handleApiCall={handleApiCall}
          history={state.request}
        />
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
