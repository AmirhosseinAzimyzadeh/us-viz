import * as topojson from 'topojson-client';
import State from "./State";

interface Props {
  us: any,
}

export default function States(props: Props) {
  const { us } = props;

  return (
    <>
      {
        /** @ts-ignore */
        topojson.feature(us, us.objects.states)['features'].map((d: any) => (
          <State
            key={d.id}
            fillColor={'blue'}
            stateData={d}
          />
        ))
      }
    </>
  );
}
