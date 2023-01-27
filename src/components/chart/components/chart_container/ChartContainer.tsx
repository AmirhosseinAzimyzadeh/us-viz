import Config from "../../../../config/Config";

interface Props {
  children: React.ReactNode;
}

export default function ChartContainer(props: Props) {
  return (
    <svg
      id={Config.ElementIDs.Chart}
      height={Config.ChartHeight}
      width={Config.ChartWidth}
      viewBox={`0 0 ${Config.ChartWidth} ${Config.ChartHeight}`}
      style={{ width: '100%', height: 'auto' }}
    >
      {props.children}
    </svg>
  );
}
