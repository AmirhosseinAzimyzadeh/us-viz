import * as topojson from 'topojson-client';
import useData from '../../../../context/hooks/useData';
import State from "./State";

interface Props {
  us: any,
}

export default function States(props: Props) {
  const [{ data, year }] = useData();
  if (!data || !year) return null;
  const { us } = props;

  const rates = data[year].Annual;

  return (
    <>
      {
        /** @ts-ignore */
        topojson.feature(us, us.objects.states)['features'].map((d: any) => {
          const stateRates = rates[d.properties.name];
          return (
            <State
              key={d.id}
              stateData={d}
              rates={stateRates ? stateRates['Unemployment Rate'] : undefined}
            />
          );
      })
      }
    </>
  );
}
