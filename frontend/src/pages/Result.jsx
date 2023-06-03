import React from "react";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { state } = location;
  let result = state && state.result; // state가 정의되어 있을 때만 result 변수에 할당
  let slicedResult = JSON.parse(result.message);

  return (
    <>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      {result ? (
        <p>{JSON.stringify(slicedResult.message.result.translatedText)}</p>
      ) : (
        <p>No result data available.</p>
      )}
    </>
  );
}
