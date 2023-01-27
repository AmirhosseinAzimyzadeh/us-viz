import Chart from './components/chart/Chart';
import USMap from './components/us_map/USMap';
import ContextProvider from './context/ContextProvider';
import styles from './styles.module.css';

function App() {
  return (
    <ContextProvider>
      <div className={styles.main_container}>
        <USMap />
        <div className={styles.line} />
        <Chart />
      </div>
    </ContextProvider>
  );
}

export default App;
