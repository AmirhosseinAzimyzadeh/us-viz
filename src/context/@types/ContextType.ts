export interface Data {
  selectedState: string | null;
  hoverState: string | null;
  selectedYear: number | null;
}

type ContextType = [
  Data,
  React.Dispatch<React.SetStateAction<Data>>,
];

export default ContextType;
