import React, {useState} from "react";
import Modal from "../components/modal/modal";
import useModal from '../utils/hooks/useModal/useModal';

export default function About() {
  const [image, setImage] = useState([]);
  const { openModal } = useModal();
  const handleClick = () => {
    openModal({ type: "single" });
  };

  return (
    <>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
      <button onClick={handleClick}>Click me!</button>
      <input type="file" accept="image/*"/>
      <Modal />
    </>
  );
}