export interface Data {
  selectedState: string | null;
  selectedStateName: string | null;

  hoverState: string | null;
  hoverStateName: string | null;
}

type ContextType = [
  Data,
  React.Dispatch<React.SetStateAction<Data>>,
];

export default ContextType;
