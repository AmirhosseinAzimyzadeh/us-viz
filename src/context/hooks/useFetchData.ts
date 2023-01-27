import * as d3 from "d3";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Data, PopulationData, UnemploymentDataAnnually } from "../@types/ContextType";

export default function useFetchData(
  setData: Dispatch<SetStateAction<Data>>,
) {

  useEffect(() => {
    fetchData().then((result) => {
      setData((p) => ({
        ...p,
        ...result,
      }));
    });
  }, [setData]);
}

interface FetchResult {
  data: UnemploymentDataAnnually;
  populationData: PopulationData[];
}
async function fetchData(): Promise<FetchResult | null> {
  try {
    const data = await d3.json("/data/u_rate.json") as UnemploymentDataAnnually;
    const populationData = await d3.csv("/data/us_population.csv") as unknown as PopulationData[];
    return {
      data,
      populationData,
    }
  } catch {
    return null;
  }
}
