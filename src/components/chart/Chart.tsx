import useData from '../../context/hooks/useData';
import BarChart from './components/bar_chart/BarChart';
import ChartContainer from './components/chart_container/ChartContainer';
import ChartTitle from './components/chart_title/ChartTitle';
import getChartData from './hooks/getChartData';
import styles from './styles.module.css';

export default function Chart() {
  const [data] = useData();

  const chartData = getChartData(data);

  return (
    <div className={styles.chart_container}>
      <ChartTitle />
      <ChartContainer>
        <BarChart chartData={chartData} />
      </ChartContainer>
    </div>
  );
}
