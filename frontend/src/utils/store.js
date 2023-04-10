import { React, createContext, useState } from "react";

export const ModalStateContext = createContext([]);
export const ModalDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export const Store = ({ children }) => {
  const [openModals, setOpenModals] = useState([]);
  const modalOpen = (Component, props) => {
    setOpenModals(modals => {
      return [...modals, { Component, props }];
    });
  };
  const modalClose = Component => {
    setOpenModals(modals => {
      return modals.filter(modal => modal.Component !== Component);
    });
  };

  const dispatch = { modalOpen, modalClose };

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={openModals}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};
