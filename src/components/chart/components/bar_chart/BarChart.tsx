import * as d3 from "d3";
import Config from "../../../../config/Config";
import Bars from "./Bars";
import LabelAxis from "./LabelAxis";
import PopulationAxis from "./PopulationAxis";

interface Props {
  chartData: Array<{ label: string, value: number }>
}

export default function BarChart(props: Props) {
  const { chartData } = props;

  // find max value
  const maxValue = d3.max(chartData, d => d.value);

  const scaleX = d3.scaleLinear()
    .domain([0, Number(maxValue)])
    .range([0, Config.ChartWidth - 100]);

  const scaleY = d3.scaleBand()
    .domain(chartData.map(d => d.label))
    .range([20, chartData.length > 55 ? chartData.length * 12 : Config.ChartHeight])

  return (
    <>
      <PopulationAxis
        scale={scaleX}
        transform={`translate(100, ${Config.ChartHeight - 20})`}
      />
      <LabelAxis
        scale={scaleY}
        transform={`translate(100, -20)`}
      />
      <Bars
        data={chartData}
        scaleX={scaleX}
        scaleY={scaleY}
        width={Config.ChartWidth - 100}
      />
    </>
  );
}
