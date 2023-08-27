import React from "react";

export default function Alert(props) {
  // Success S is capitalized function below
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // props.alert && is used because props default is set to null
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}