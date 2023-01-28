import { Data } from "../../../context/@types/ContextType";

export default function getChartData(
  data: Data,
): Array<{ label: string, value: number, countyId: number, stateId: number }> {
  if (!data.populationData) return [];

  const { populationData, selectedStateName, year } = data;

  if (selectedStateName) {
    return populationData.filter((d) => (d.STNAME === selectedStateName && d.STNAME !== d.CTYNAME))
      .map((d) => ({
        label: d.CTYNAME,
        value: Number(d[`POPESTIMATE${year}`]),
        countyId: Number(d.COUNTY),
        stateId: Number(d.STATE),
      }));
  }

  return populationData.filter((d) => d.STNAME === d.CTYNAME)
    .map((d) => ({
      label: d.STNAME,
      value: Number(d[`POPESTIMATE${year}`]),
      countyId: Number(d.COUNTY),
      stateId: Number(d.STATE),
    }));

}
