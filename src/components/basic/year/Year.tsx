import styles from './styles.module.css';

interface Props {
  value: number;
}

export default function Year(props: Props) {
  return (
    <span className={styles.year}>
      {props.value}
    </span>
  );
}
