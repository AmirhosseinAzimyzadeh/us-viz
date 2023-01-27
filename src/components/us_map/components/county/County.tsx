import * as d3 from "d3";
import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";

interface Props {
  countyData: any;
}

export default function County(props: Props) {
  const [data] = useData();
  const { countyData } = props;
  const path = d3.geoPath();

  return (
    <path
      fill={(data.selectedState === countyData.properties.state) ? Config.HighlightColor : 'rgba(0,0,0,0)'}
      d={String(path(countyData))}
      stroke={'rgba(0,0,0,0.2)'}
    />
  );
}

