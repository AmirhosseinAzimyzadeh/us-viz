interface Props {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function Select(props: Props) {
  const { options, selected, onChange } = props;

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {
        options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))
      }
    </select>
  );
}
