import Chart from './components/chart/Chart';
import HoverData from './components/hover_data/HoverData';
import USMap from './components/us_map/USMap';
import ContextProvider from './context/ContextProvider';
import styles from './styles.module.css';

function App() {
  return (
    <ContextProvider>
      <HoverData />
      <div className={styles.main_container}>
        <USMap />
        <div className={styles.line} />
        <Chart />
      </div>
    </ContextProvider>
  );
}

export default App;
