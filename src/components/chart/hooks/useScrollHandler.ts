import * as d3 from "d3";
import { useEffect } from "react";
import Config from "../../../config/Config";
import useData from "../../../context/hooks/useData";

export default function useScrollHandler(
  gElement: SVGGElement | null,
) {

  const [{ selectedState }] = useData();
  useEffect(() => {
    if (!gElement) return;

    d3.select(gElement)
      .style('transition', 'transform 0.5s ease-in-out')
      .on('wheel', function (e) {
        const { deltaY } = e;
        // previous translate value
        let previousTranslate = d3.select(this).attr('transform');
        if (!previousTranslate) previousTranslate = 'translate(0, 0)';
        const [xTranslate, yTranslate] = previousTranslate
          .split('(')[1]
          .split(')')[0]
          .split(',')
          .map((d) => Number(d));

        
        // height of the element
        let height = d3.select(this).node()?.getBoundingClientRect().height;
        const containerHeight = d3.select(this).node()?.parentElement?.getBoundingClientRect().height;
        if (!height || !containerHeight) return;

        // min and max values for y translate
        height = (Config.ChartHeight * height) / containerHeight;
        const min = -height + Config.ChartHeight - 20;
        const max = 0;

        const newY = yTranslate - deltaY;
        const translateY = (newY < min) ? min : (newY > max) ? max : newY;
        
        d3.select(this).attr('transform', `translate(0, ${translateY})`);
      }
    );

  }, [gElement]);

  // reset scroll on state change
  useEffect(() => {
    if (!gElement) return;
    d3.select(gElement)
      .attr('transform', 'translate(0, 0)');
  }, [selectedState, gElement]);

}
