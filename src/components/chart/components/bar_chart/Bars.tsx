import * as d3 from "d3";
import Config from "../../../../config/Config";
import useData from "../../../../context/hooks/useData";

interface Props {
  data: { label: string, value: number }[];
  width: number;
  scaleX: d3.ScaleLinear<number, number>;
  scaleY: d3.ScaleBand<string>;
}

export default function Bars(props: Props) {
  const [{ hoverStateName, hoverCounty }] = useData();

  return (
    <g transform="translate(100, -20)">
      {props.data.map(({ value, label }, i) => (
        <rect
          key={i}
          x={props.scaleX(Number(value))}
          y={props.scaleY(label)}
          width={props.scaleX(value)}
          transform={`translate(-${props.scaleX(value)},0)`}
          height={props.scaleY.bandwidth()}
          fill={
            hoverStateName === label || hoverCounty === label.replace(' County', '')
            ? Config.HighlightColor
            : Config.Colors[Math.ceil(Config.Colors.length / 2)]
          }
        />
      ))}
    </g>
  );
}