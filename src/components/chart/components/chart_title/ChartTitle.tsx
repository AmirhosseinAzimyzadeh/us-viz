import useData from "../../../../context/hooks/useData";
import Title from "../../../basic/title/Title";

export default function ChartTitle() {
  const [data] = useData();

  return (
    <Title>
      {
        data.selectedState
          ? `${data.selectedStateName} Population By County`
          : 'US Population By State'
      }
      -
      {data.year}
    </Title>
  );
}
