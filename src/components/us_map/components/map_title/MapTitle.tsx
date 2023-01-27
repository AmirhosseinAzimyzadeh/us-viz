import useData from "../../../../context/hooks/useData";
import Select from "../../../basic/select/Select";
import Title from "../../../basic/title/Title";
import styles from './styles.module.css';

export default function MapTitle() {
  const [data, setData] = useData();

  return (
    <div className={styles.container}>
      <Title>
        {
          data.selectedState
            ? `${data.selectedStateName} Unemployment Rate`
            : 'US Unemployment Rate By State'
        }
      </Title>
      <Select
        options={['2013', '2014', '2015', '2016']}
        selected={data.year}
        onChange={(year) => setData((p) => ({ ...p, year, }))}
      />
    </div>
  );
}
