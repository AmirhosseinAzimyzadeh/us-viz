import * as d3 from "d3";
import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";
import { zoom } from "../../USMap";

interface Props {
  stateData: any;
  rates: { [countyName: string]: number } | undefined;
}

export default function State(props: Props) {
  const [data, setData] = useData();
  const { stateData, rates } = props;
  const path = d3.geoPath();

  // average rate of the state
  let avgRate = 0;
  let fillColor = 'yellow';
  if (rates) {
    const rateValues = Object.values(rates).filter((r) => r !== undefined);
    if (rateValues.length > 0) {
      avgRate = rateValues.reduce((a, b) => a + b, 0) / rateValues.length;
      fillColor = Config.Colors[Math.round(avgRate)];
    }
  }

  if (isNaN(avgRate)) {
    fillColor = 'yellow';
  }

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
            .translate(Config.MapWidth / 2, Config.MapHeight / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / Config.MapWidth, (y1 - y0) / Config.MapHeight)))
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
      stroke="white"
    />
  );
}
