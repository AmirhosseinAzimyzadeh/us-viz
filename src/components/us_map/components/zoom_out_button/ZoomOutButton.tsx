import useData from "../../../../context/hooks/useData";
import styles from './styles.module.css';

export default function ZoomOutButton() {
  const [data, setData] = useData();

  if (!data.selectedState) return null;

  return (
    <button
      className={styles.zoom_out}
      onClick={() => {
        setData((p) => ({ ...p, selectedState: null }));
      }}
    >
      Zoom Out
    </button>
  );
}
