import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";

const GlobalContext = createContext();

export default GlobalContext;

export function GlobalContextProvider({ children }) {
  // States
  const [startAnim, setStartAnim] = useState(false);
  // const [screenRatio, setScreenRatio] = useState({
  //   availWidth: window.screen.availWidth,
  //   availHeight: window.screen.availHeight,
  // });

  // // Detects changes in window size and updates matching state with new values
  // window.addEventListener("resize", (e) => {
  //   setScreenRatio({
  //     availWidth: e.target.screen.availWidth,
  //     availHeight: e.target.screen.availHeight,
  //   });
  // });

  // Memo pour optimisation => empêche les rerenders intempestifs au moindre changement de state
  //  - Passer les getter et setter de vos states entre les accolades, et le getter dans le tableau
  //    de dépendances
  const value = useMemo(() => ({ startAnim, setStartAnim }), [startAnim]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

// Custom hook à utiliser dans les imports de Context
// export const useGlobalContext = () => useContext(GlobalContext);

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
