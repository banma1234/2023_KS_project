import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/button/button'

export default function Home() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const uploadImage = async e => {
    const file = e.target.files[0];
    setImage(file)
  };

  const postImageToServer = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      let response = await fetch('/api/scanImage', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        console.log("success");
        navigate.push("/result", { data });
      } else {
        console.log(data.message);
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <div>
        <input type="file" accept="image/jpg, image/jpeg, image/png, image/webp" onChange={uploadImage}/>
        <img src={"/camera.png"} alt="camera" />
      </div>
      <br />
      <Button color="green" ButtonType="default" onClick={postImageToServer}>
        Go
      </Button>
    </>
  );
}