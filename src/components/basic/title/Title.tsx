import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Title(props: Props) {
  return (
    <h1 className={styles.title}>
      {props.children}
    </h1>
  );
}
