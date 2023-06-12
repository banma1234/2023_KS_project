import React from "react";
import Box from "../components/box/box";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { state } = location;
  let result = state && state.result; // state가 정의되어 있을 때만 result 변수에 할당
  result = JSON.parse(result.message);

  return (
    <>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <Box type="default" color="purple">
        <p>{result ? result.message.result.translatedText : "no result"}</p>
      </Box>
    </>
  );
}
