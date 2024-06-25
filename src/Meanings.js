import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
