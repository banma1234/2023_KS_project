import { React, createContext, useState } from "react";

export const ModalStateContext = createContext();
export const ModalSetterContext = createContext();

export function Store({ children }) {
  const [state, setState] = useState({
      type: null,
      props: null,
    });

  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}