import useData from "../../../../context/hooks/useData";
import Title from "../../../basic/title/Title";

export default function MapTitle() {
  const [data] = useData();

  return (
    <Title>
    {
      data.selectedState
        ? `${data.selectedStateName} Unemployment Rate`
        : 'US Unemployment Rate By State'
    }
  </Title>
  );
}
