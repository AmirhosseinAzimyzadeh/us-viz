import * as d3 from "d3";
import { useEffect, useRef } from "react";

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
    <g ref={gRef} transform={props.transform} />
  );
}
