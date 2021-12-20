import { createContext, useState } from "react";

const NavContext = createContext({});

export function NavContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }
  
  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext;