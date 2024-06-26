import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos section-photos">
        <div className="grid">
          {props.photos.map(function (photos, index) {
            return (
              <div className="row">
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="photo"
                    src={photos.src.tiny}
                    alt={photos.alt}
                    key={index}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
