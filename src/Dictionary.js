import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);

    setResults(response.data);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
