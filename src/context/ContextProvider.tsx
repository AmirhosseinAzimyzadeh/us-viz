import { useState } from "react";
import Context, { emptyContext } from "./Context";
import useFetchData from "./hooks/useFetchData";

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider(props: Props) {
  const ctx = useState(emptyContext);

  // loading data into context
  useFetchData(ctx[1]);

  if (!ctx[0].data) return <>Loading ...</>;

  return (
    <Context.Provider value={ctx}>
      {props.children}
    </Context.Provider>
  );
}
