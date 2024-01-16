import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze The Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The <strong>"TextUtils"</strong> app is a simple yet versatile
              tool designed to manipulate text efficiently. It offers several
              essential functions: <strong>Uppercase Conversion:</strong> Easily
              convert text to uppercase letters for emphasis or consistency.{" "}
              <strong>Lowercase Conversion:</strong> Change text to lowercase
              letters, useful for standardized formatting.{" "}
              <strong>Copy Text:</strong> Quickly copy the modified text to your
              clipboard for easy sharing or pasting.{" "}
              <strong>Clear Text:</strong>
              Start with a clean slate by removing all text from the editing
              area. <strong>Remove Spaces:</strong> Eliminate extra spaces
              within the text, ensuring neat and tidy formatting. This app is
              ideal for users who need to perform basic text transformations and
              cleanup tasks without the need for complex features. Whether
              you're preparing text for a document, email, or any other purpose,
              this utility simplifies the process.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              "Free and user-friendly text utility for case conversion, text
              copying, clearing, and space removal."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Brower Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              "Free and user-friendly text utility for case conversion, text
              copying, clearing, and space removal."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
