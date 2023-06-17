import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/button";
import Modal from "../components/modal/modal";
import useModal from "../utils/hooks/useModal/useModal";

export default function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const uploadImage = async e => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const postImageToServer = async () => {
    try {
      openModal({ type: "loading" });

      let formData = new FormData();
      formData.append("image", image);

      let response = await fetch("/api/scanImage", {
        method: "POST",
        body: formData,
      });
      let data = await response.json();

      if (data.success) {
        closeModal();
        console.log("success");
        navigate("/result", { state: { result: data } });
      } else {
        closeModal();
        console.log(data.message);
      }
    } catch (error) {
      closeModal();
      console.log(error);
    }
  };

  return (
    <>
      <br />
      <h1>사진을 등록하세요</h1>
      <br />
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/webp"
        style={{ display: "none" }}
        id="camera"
        onChange={uploadImage}
      />
      <label htmlFor="camera">
        <div>
          {preview ? (
            <img
              src={preview}
              alt="image preview"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <img
              src={"/camera.png"}
              alt="camera"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </label>
      <br />
      <Button color="green" ButtonType="default" onClick={postImageToServer}>
        Go
      </Button>
      <Modal />
    </>
  );
}
