import { useContext } from "react";
import Context from "../Context";

export default function useData() {
  const ctx = useContext(Context);
  return ctx;
}
