interface UnemploymentDataAnnually {
  [year: string]: {
    Annual: {
      [stateName: string]: {
        'Unemployment Rate': {
          [countyName: string]: number,
        }
      }
    }
  }
}

export interface Data {
  selectedState: string | null;
  selectedStateName: string | null;

  hoverState: string | null;
  hoverStateName: string | null;

  data: null | UnemploymentDataAnnually;
  year: string;
}

type ContextType = [
  Data,
  React.Dispatch<React.SetStateAction<Data>>,
];

export default ContextType;
