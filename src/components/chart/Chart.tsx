import ChartTitle from './components/chart_title/ChartTitle';
import styles from './styles.module.css';

export default function Chart() {
  return (
    <div className={styles.chart_container}>
      <ChartTitle />
    </div>
  );
}
