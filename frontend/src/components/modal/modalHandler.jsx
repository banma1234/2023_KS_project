import { useContext } from "react";
import { ModalDispatchContext } from "../../utils/store";

const ModalHandler = () => {
  const { open, close } = useContext(ModalDispatchContext);
  const openModal = (Component, props) => {
    open(Component, props);
  };
  const closeModal = Component => {
    close(Component);
  };

  return { openModal, closeModal };
};

export default ModalHandler;
