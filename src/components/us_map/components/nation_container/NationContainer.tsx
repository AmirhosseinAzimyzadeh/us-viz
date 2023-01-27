import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";

interface Props {
  children: React.ReactNode;
}

export default function NationContainer(props: Props) {
  const [data] = useData();

  return (
    <svg
      id={Config.ElementIDs.Map}
      width="960"
      height="600"
      viewBox="0 0 960 600"
      style={{
        width: "100%",
        height: "auto",
        border: data.selectedState ? '2px solid rgba(0,0,0,0.1)' : 'none',
        borderRadius: '10px',
      }}
    >
      <g>
        {props.children}
      </g>
    </svg>
  );
}
