import React from "react";
import ContextType, { Data } from "./@types/ContextType";

const emptyContext: Data = {
  selectedState: null,
  selectedStateName: null,

  hoverState: null,
  hoverStateName: null,

  data: null,
  year: '2014',
}

export { emptyContext };

const Context = React.createContext<ContextType>([
  emptyContext,
  () => {/** INITIAL FUNCTION */},
]);

export default Context;