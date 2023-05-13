import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from '../../utils/store'
import SampleModal from "./SampleModal";
import SecondModal from "./SecondModal";
import { Container, Overlay } from "./modalStyle";
import useModal from '../../utils/hooks/useModal/useModal';

const MODAL_COMPONENTS = {
  single: SampleModal,
  dual: SecondModal,
};

function ModalContainer() {
  const { type, props } = useContext(ModalStateContext);
  const { closeModal } = useModal();

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];
  return createPortal(
    <>
      <Overlay>
        <Container>
          <Modal {...props} onClose={closeModal} />
        </Container>
      </Overlay>
    </>,
    document.getElementById("modal"),
  );
}

export default ModalContainer;