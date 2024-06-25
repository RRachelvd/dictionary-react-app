import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search() {
    alert(`Searching for the definition of ${keyword}...`);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
