import React from "react";
import Modal from "../components/modal/modal";
import ModalHandler from "../components/modal/modalHandler";

export default function About() {
  const { openModal } = ModalHandler();
  const handleClick = () => {
    openModal(ModalPage, null);
  };

  return (
    <>
      <h1>About</h1>
      <h1>About</h1>
      <h1>About</h1>
      <button onClick={handleClick}>Click me!</button>
      <Modal />
    </>
  );
}

const ModalPage = ({ isOpen, onCancel }) => {
  return (
    <div isOpen={isOpen}>
      <h1>모달창</h1>
      <hr />
      <div>
        <button onClick={onCancel}>확인</button>
      </div>
    </div>
  );
};
