import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();

    search();
  }

  function handleResponse(response) {
    console.log(response.data);

    setResults(response.data);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Type a word here..."
              autoFocus={true}
              onChange={handleKeywordChange}
              className="search-input"
            />
            <input
              type="submit"
              onSubmit={handleSearch}
              className="search-button"
              value="Search"
            />
          </form>
          <div className="hint">
            e.g. limerence, serendipity, grenadine or other keywords to give you
            inspiration
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();

    return "Loading";
  }
}
