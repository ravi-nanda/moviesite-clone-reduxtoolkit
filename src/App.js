import "./App.css";
import React, { useEffect } from "react";
import { fetchDataFromApi } from "../src/api";
const App = () => {
  const testApi = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    testApi();
  }, []);
  return <div></div>;
};

export default App;
