import * as d3 from "d3";
import { Dispatch, SetStateAction, useEffect } from "react";
import Config from "../../config/Config";
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
    console.log("fetching data...");
    const data = await d3.json(Config.dataPath.usUnemploymentRate) as UnemploymentDataAnnually;
    const populationData = await d3.csv(Config.dataPath.populationCSV) as unknown as PopulationData[];
    return {
      data,
      populationData,
    }
  } catch (e) {
    console.log("error fetching data", e);
    return null;
  }
}
