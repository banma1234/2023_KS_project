import React from "react";

export default function Result(props) {
  const { result } = props.location.state;

  return (
    <>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
}
