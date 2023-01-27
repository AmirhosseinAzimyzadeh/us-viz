import React from "react";
import ContextType, { Data } from "./@types/ContextType";

const emptyContext: Data = {
  selectedState: null,
  selectedStateName: null,

  hoverState: null,
  hoverStateName: null,
}

export { emptyContext };

const Context = React.createContext<ContextType>([
  emptyContext,
  () => {/** INITIAL FUNCTION */},
]);

export default Context;