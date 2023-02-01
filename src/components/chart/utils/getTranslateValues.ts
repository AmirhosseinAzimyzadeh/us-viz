import * as d3 from "d3";

export default function getTranslateValues(
  element: SVGGElement | null
): { xTranslate: number, yTranslate: number } {
  if (element === null) throw new Error('Element is null');
  let previousTranslate = d3.select(element).attr('transform');
  if (!previousTranslate) previousTranslate = 'translate(0, 0)';
  const [xTranslate, yTranslate] = previousTranslate
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map((d) => Number(d));
  return {
    xTranslate,
    yTranslate,
  }
}