import * as d3 from "d3";
import { useEffect } from "react";
import Config from "../../../config/Config";
import { zoom } from "./zoomInState";

export default function useZoomControl(
  loading: boolean,
  selectedState: string | null
) {

  // Handle zoom out
  useEffect(() => {
    if (loading || selectedState) return;
    const svg = d3.select(`#${Config.ElementIDs.Map}`);
    svg.transition().duration(Config.TransitionDuration).call(
      // @ts-ignore
      zoom.transform,
      d3.zoomIdentity,
      // @ts-ignore
      d3.zoomTransform(svg.node()).invert([960 / 2, 600 / 2])
    );
  }, [selectedState, loading]);
}
