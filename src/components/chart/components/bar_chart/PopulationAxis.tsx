import * as d3 from "d3";
import { useEffect, useRef } from "react";
import Config from "../../../../config/Config";

interface Props {
  scale: d3.ScaleLinear<number, number>;
  transform?: string;
}

export default function PopulationAxis(props: Props) {
  const gRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (gRef.current === null) return;

    d3.select(gRef.current)
      .call(
        d3.axisBottom(props.scale)
          .tickFormat((d) => d3.format(".2s")(d).replace("G", "B"))
      );

  }, [gRef, props.scale])

  return (
    <g transform={props.transform}>
      {/** White background for the population axis */}
      <rect
        x={-100}
        y={0}
        width={Config.ChartWidth + 100}
        height={80}
        fill="white"
      />
      {/** Population axis */}
      <g ref={gRef} />
    </g>
  );
}
