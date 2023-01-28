import styles from './styles.module.css';
import useMapData from "./hooks/useMapData";
import useData from "../../context/hooks/useData";
import ZoomOutButton from "./components/zoom_out_button/ZoomOutButton";
import NationContainer from "./components/nation_container/NationContainer";
import MapTitle from "./components/map_title/MapTitle";
import States from "./components/state/States";
import Counties from "./components/county/Counties";
import useZoomControl from "./hooks/useZoomControl";

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
