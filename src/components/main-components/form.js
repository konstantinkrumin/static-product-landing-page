import React from "react";

export default function Form(props) {
  return (
    <form id="form" action={props.action}>
      <input
        id={props.type}
        name={props.type}
        type={props.type}
        placeholder={props.placeholder}
        required
      />
      <input
        id="submit"
        className="button"
        type="submit"
        value={props.buttonValue}
      />
    </form>
  );
}
