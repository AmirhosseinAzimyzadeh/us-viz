export interface PopulationData {
  STATE: string;
  STNAME: string;
  COUNTY: string;
  CTYNAME: string;
  POPESTIMATE2013: string;
  POPESTIMATE2014: string;
  POPESTIMATE2015: string;
  POPESTIMATE2016: string;
  [key: string]: string;
}


export interface UnemploymentDataAnnually {
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
  populationData: null | Array<PopulationData>,
  year: string;

  hoverCounty: null | string,
}

type ContextType = [
  Data,
  React.Dispatch<React.SetStateAction<Data>>,
];

export default ContextType;
