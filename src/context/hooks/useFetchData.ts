import { Dispatch, SetStateAction, useEffect } from "react";
import { Data } from "../@types/ContextType";

export default function useFetchData(
  setData: Dispatch<SetStateAction<Data>>,
) {

  useEffect(() => {
    fetch(
      "/data/u_rate.json",
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      },
    ).then((response) => {
      response.json().then((data) => {
        setData((p) => ({
          ...p,
          data: data,
        }));
    })});
  }, [setData]);
}
