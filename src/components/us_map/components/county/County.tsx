import * as d3 from "d3";
import Config from "../../../../config/Config";

interface Props {
  countyData: any;
  rate?: number;
}

export default function County(props: Props) {
  const { countyData } = props;
  const path = d3.geoPath();

  let color = 'yellow';
  // check if rate is undefined
  if (props.rate !== undefined) {
    color = Config.Colors[Math.round(props.rate)];
  };

  return (
    <path
      fill={color}
      d={String(path(countyData))}
      stroke={'rgba(0,0,0,0.2)'}
    />
  );
}

