import * as d3 from "d3";
import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";
import scrollChartToCounty from "./utils/scrollChartToCounty";

interface Props {
  countyData: any;
  rate?: number;
}

export default function County(props: Props) {
  const [{ hoverCounty }, setData] = useData();
  const { countyData } = props;
  const path = d3.geoPath();

  let color = 'yellow';
  // check if rate is undefined
  if (props.rate !== undefined) {
    color = Config.Colors[Math.round(props.rate)];
  };

  return (
    <path
      fill={hoverCounty === props.countyData.properties.name ? Config.HighlightColor : color}
      d={String(path(countyData))}
      stroke="white"
      onMouseEnter={() => {
        scrollChartToCounty(countyData.properties.name);
        setData((p) => ({
          ...p,
          hoverCounty: countyData.properties.name,
        }));
      }}
      onMouseLeave={() => {
        setData((p) => ({
          ...p,
          hoverCounty: null,
        }));
      }}
    />
  );
}

