import React from "react";
import Meanings from "./Meanings.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="keyword">
          <h2>{props.results.word}</h2>
          <h2>
            <em>{props.results.phonetic}</em>
          </h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
