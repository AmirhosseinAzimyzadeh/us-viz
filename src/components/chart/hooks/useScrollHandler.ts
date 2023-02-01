import * as d3 from "d3";
import { useEffect } from "react";
import Config from "../../../config/Config";
import useData from "../../../context/hooks/useData";
import getTranslateValues from "../utils/getTranslateValues";

export default function useScrollHandler(
  gElement: SVGGElement | null,
) {

  const [{ selectedState }] = useData();
  useEffect(() => {
    if (!gElement) return;

    d3.select(gElement)
      .on('wheel', function (e) {
        const { deltaY } = e;
        // previous translate value
        const { yTranslate } = getTranslateValues(this);
        d3.select(this).style('transition', 'transform 0.1s linear');
        
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
