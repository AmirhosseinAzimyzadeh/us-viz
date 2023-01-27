import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
  scale: d3.ScaleBand<string>;
  transform?: string;
}

export default function LabelAxis(props: Props) {
  const gRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (gRef.current === null) return;

    d3.select(gRef.current)
      .call(
        d3.axisLeft(props.scale)
        .tickFormat((d) => (d.replace("County", "")))
      );

  }, [gRef, props.scale])

  return (
    <g ref={gRef} transform={props.transform} />
  );
}
