import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handeleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsReponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handeleDictionaryResponse);

    let pexelsApiKey =
      "bouGCzWy5KEHuFWnn1fkWL5aIfR8MozT8W51WgEvm17gh3nraNsk7EpZ";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsReponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();

    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word is on your mind today?</h1>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Type something..."
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
            e.g. foggy, serendipity, grenadine or other keywords to give you
            inspiration
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();

    return "Loading";
  }
}
