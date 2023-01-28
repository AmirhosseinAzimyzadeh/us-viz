import * as d3 from 'd3';
import { useEffect, useState } from "react";
import Config from '../../../config/Config';

interface MapData {
  data: any;
  loading: boolean;
}

export default function useMapData() {
  const [mapData, setMapData] = useState<MapData>({
    data: {},
    loading: true,
  });

  useEffect(() => {
    d3.json(Config.dataPath.usMap)
      .then((result) => {
        setMapData((p) => ({ ...p, data: result, loading: false }));
      }).catch((e) => console.error(e));
  }, []);

  return mapData;
}
