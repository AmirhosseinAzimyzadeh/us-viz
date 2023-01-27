import * as d3 from "d3";
import Config from "../../config/Config";
import styles from './styles.module.css';
import useMapData from "./hooks/useMapData";
import useData from "../../context/hooks/useData";
import ZoomOutButton from "./components/zoom_out_button/ZoomOutButton";
import NationContainer from "./components/nation_container/NationContainer";
import MapTitle from "./components/map_title/MapTitle";
import States from "./components/state/States";
import Counties from "./components/county/Counties";
import useZoomControl from "./hooks/useZoomControl";

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

export default function USMap() {
  const mapData = useMapData();
  const [data] = useData();

  useZoomControl(mapData.loading, data.selectedState);

  if (mapData.loading) return <div> Loading ... </div>

  return (
    <div className={styles.map_container}>
      <MapTitle />
      <NationContainer>
        <States us={mapData.data} />
        <Counties us={mapData.data} />
       </NationContainer>
      <ZoomOutButton />
    </div>
  );
}
