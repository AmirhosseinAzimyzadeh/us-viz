import * as d3 from "d3";
import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";
import { zoom } from "../../USMap";

interface Props {
  stateData: any;
  fillColor: string;
}

export default function State(props: Props) {
  const [data, setData] = useData();
  const { stateData, fillColor } = props;
  const path = d3.geoPath();

  return (
    <path
      onClick={() => {
        setData((p) => ({
          ...p,
          selectedState: stateData.id,
          selectedStateName: stateData.properties.name,
        }))
        const svg = d3.select(`#${Config.ElementIDs.Map}`);
        const [[x0, y0], [x1, y1]] = path.bounds(stateData);
        svg.transition().duration(Config.TransitionDuration).call(
          // @ts-ignore
          zoom.transform,
          d3.zoomIdentity
            .translate(960 / 2, 600 / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / 960, (y1 - y0) / 600)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        );
      }}
      onMouseEnter={() => {
        setData((p) => ({
          ...p,
          hoverState: stateData.id,
          hoverStateName: stateData.properties.name,
        }))
      }}
      onMouseLeave={() => {
        setData((p) => ({
          ...p,
          hoverState: null,
          hoverStateName: null,
        }))
      }}
      opacity={data.selectedState && data.selectedState !== stateData.id ? 0.5 : 1}
      fill={(data.hoverState === stateData.id) ? Config.HighlightColor : fillColor}
      d={String(path(stateData))}
      stroke={'rgba(0,0,0,0.2)'}
    />
  );
}
