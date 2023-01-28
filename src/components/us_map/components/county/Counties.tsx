import * as topojson from "topojson-client";
import useData from "../../../../context/hooks/useData";
import County from "./County";

interface Props {
  us: any,
}

export default function Counties(props: Props) {
  const [data] = useData();
  if (!data.data || !data.selectedStateName) return null;
  const rates = data.data[data.year]
    .Annual[data.selectedStateName]

  let suffix = ' County';
  if (data.selectedStateName === 'Louisiana') suffix = ' Parish';
  
  const { us } = props;

  return (
    <>
      {
        data.selectedState && (
          <>
            {
              /** @ts-ignore */
              topojson.feature(us, us.objects.counties)['features']
              .filter((d: any) => d.id.startsWith(data.selectedState))
              .map((d: any, i: number) => (
                <County
                  key={d.id}
                  countyData={d}
                  rate={rates ? rates['Unemployment Rate'][d.properties.name + suffix] : undefined}
                />
              ))
            }
          </>
        )
      }
    </>
  );
}
