import { createContext, useState } from "react";

export const NavTitleContext = createContext();

export const NavTitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Codirex");

  return (
    <NavTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </NavTitleContext.Provider>
  );
};