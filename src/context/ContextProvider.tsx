import { useState } from "react";
import Context, { emptyContext } from "./Context";

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider(props: Props) {
  const ctx = useState(emptyContext);

  return (
    <Context.Provider value={ctx}>
      {props.children}
    </Context.Provider>
  );
}
