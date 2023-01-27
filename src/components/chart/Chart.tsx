import Title from '../basic/title/Title';
import styles from './styles.module.css';

export default function Chart() {
  return (
    <div className={styles.chart_container}>
      <Title>US Population by state</Title>
    </div>
  );
}
