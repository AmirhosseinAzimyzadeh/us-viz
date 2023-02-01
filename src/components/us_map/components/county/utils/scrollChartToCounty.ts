import * as d3 from "d3";
import Config from "../../../../../config/Config";
import Debounce from "../../../../../utils/Debounce";

const debounce = new Debounce(200);

function scrollHandler(countyName: string) {
  const chart = d3.select<SVGAElement, null>(`#${Config.ElementIDs.Chart}`);
  const verticalAxis = chart.select<SVGGElement>(`#${Config.ElementIDs.ChartVerticalAxis}`);
  verticalAxis.style('transition', 'transform 1s cubic-bezier(0.82, 0.01, 0.18, 0.99)');
  const county = document.getElementById(countyName);

  // Chart height
  const chartHeight = Number(chart.node()?.clientHeight);

  let i = Number(county?.dataset.chartIndex);
  i = isNaN(i) ? 0 : i;

  if (
    chartHeight === undefined
    || verticalAxis.node() === null
  ) return;


  const newTranslateY = (-(i * Config.BarThicknessInScrollMode) + 100);

  // find min and max values for y translate
  let height = Number(verticalAxis.node()?.getBoundingClientRect().height)
  height = (Config.ChartHeight * height) / chartHeight;
  const min = -height + Config.ChartHeight - 20;
  const max = 0;
  
  const translateY = (newTranslateY < min)
    ? min
    : (newTranslateY > max)
      ? max : newTranslateY;
  verticalAxis.attr('transform', `translate(0, ${translateY})`);
}

export default function scrollChartToCounty(countyName: string) {
  debounce.use(() => { scrollHandler(countyName); });
}
