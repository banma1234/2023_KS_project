import { useContext } from "react";
import { ModalStateContext, ModalDispatchContext } from "../../utils/store";

const Modal = () => {
  const openModal = useContext(ModalStateContext);
  const { closeModal } = useContext(ModalDispatchContext);

  return openModal.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      closeModal(Component);
    };

    return <div key={index} onClose={onClose} {...restProps} />;
  });
};

export default Modal;
