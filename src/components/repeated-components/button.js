import React from "react";

export default function Button(props) {
  return (
    <button type="submit" className="button">
      {props.text}
    </button>
  );
}
