import { React, useState, useEffect } from "react";

export default function Result() {
  const [data, setData] = useState({
    name: "",
    date: "",
    programming: "",
  });

  const fetchData = async () => {
    let response = await fetch("/api/data", {
      method: "GET",
    });

    let data = await response.json();
    setData({
      name: data.Name,
      date: data.Date,
      programming: data.programming,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Result</h1>
      <h1>Result</h1>
      <h1>Result</h1>
      <ul>
        <li>name : {data.name}</li>
        <li>date : {data.date}</li>
        <li>programming : {data.programming}</li>
      </ul>
    </>
  );
}
