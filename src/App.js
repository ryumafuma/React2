import { useState } from "react";
import "./App.css";
import React from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

function App() {
  const [simpsons, setSimpsons] = useState("");

  function getSimpsons() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0]);
        setSimpsons(data[0]);
      });
  }
  return (
    <div className="App">
      <QuoteCard simpsons={simpsons} />
      <button type="button" onClick={getSimpsons}>
        Simpsons citation
      </button>
    </div>
  );
}

export default App;