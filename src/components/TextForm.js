import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase", "success");
  };

  const handleLowerClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert(" Your Text Has been Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("On Change");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Your Text Has been Copied to ClipBoard", "success");
  };

  const handleExtraSpaces = () => {
    // console.log("On Change");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces have been removed", "success");
  };

  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === "dark" ? "white" : "#1a2229" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#505457" : "white",
              color: props.mode === "dark" ? "white" : "#081e2f",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          Covert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Covert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "#081e2f" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Mintues to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview it here"}
        </p>
      </div>
    </>
  );
}
