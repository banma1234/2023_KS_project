import { React, useState, useEffect } from 'react';

export default function Result() {
    const [data, setData] = useState({
        name: "",
        date: "",
        programming: "",
    });

    useEffect(async () => {
        let response = await fetch("/api/data", {
            method: "GET"
        });

        let data = await response.json();
        setData({
            name: data.Name,
            date: data.date,
            programming: data.programming,
        });
    }, []);

    return(
        <>
            <h1>Result</h1>
            <br/><hr/>
            <ul>
                <li>name : {data.name}</li>
                <li>date : {data.date}</li>
                <li>programming : {data.programming}</li>
            </ul>
        </>
    );
};