import * as d3 from "d3";
import { useRef } from "react";
import Config from "../../../../config/Config";
import useScrollHandler from "../../hooks/useScrollHandler";
import Bars from "./Bars";
import LabelAxis from "./LabelAxis";
import PopulationAxis from "./PopulationAxis";

interface Props {
  chartData: Array<{ label: string, value: number, countyId: number, stateId: number }>
}

export default function BarChart(props: Props) {
  const { chartData } = props;
  const verticalAxisRef = useRef<SVGGElement>(null);
  useScrollHandler(verticalAxisRef.current);

  // find max value
  const maxValue = d3.max(chartData, d => d.value);

  const scaleX = d3.scaleLinear()
    .domain([0, Number(maxValue)])
    .range([0, Config.ChartWidth - 100]);

  const scaleY = d3.scaleBand()
    .domain(chartData.map(d => d.label))
    .range([
        20,
        chartData.length > Config.ScrollThreshold
          ? chartData.length * Config.BarThicknessInScrollMode
          : Config.ChartHeight
      ])

  return (
    <>
      <g id={Config.ElementIDs.ChartVerticalAxis} ref={verticalAxisRef}>
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
      </g>
      <PopulationAxis
        scale={scaleX}
        transform={`translate(100, ${Config.ChartHeight - 20})`}
      />
    </>
  );
}
