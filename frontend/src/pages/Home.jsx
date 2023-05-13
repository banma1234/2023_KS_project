import React from "react";
import Button from '../components/button/button'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <div>
        <img src={"/camera.png"} alt="camera" />
      </div>
      <Button color="green" ButtonType="default">
        Go
      </Button>
    </>
  );
}