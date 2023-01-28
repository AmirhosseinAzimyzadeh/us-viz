import * as d3 from 'd3';
import Config from '../../../config/Config';

const zoom = d3.zoom()
.scaleExtent([1, 8])
.on("zoom", (event) => {
  const svg = d3.select(`#${Config.ElementIDs.Map}`);
  const g = svg.select("g");
  const {transform} = event;
  g.attr("transform", transform);
  g.attr("stroke-width", 1 / transform.k);
});

export { zoom };

export default function zoomInState(stateData: any) {
  const path = d3.geoPath();
  const svg = d3.select(`#${Config.ElementIDs.Map}`);

  const [[x0, y0], [x1, y1]] = path.bounds(stateData);

  svg.transition().duration(Config.TransitionDuration).call(
    // @ts-ignore
    zoom.transform,
    d3.zoomIdentity
      .translate(Config.MapWidth / 2, Config.MapHeight / 2)
      .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / Config.MapWidth, (y1 - y0) / Config.MapHeight)))
      .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
  );
}
