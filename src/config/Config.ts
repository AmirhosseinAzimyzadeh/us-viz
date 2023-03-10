const isInDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const Config = {
  Colors: [
    '#fff7fb', // 0 - 10%
    '#ece7f2', // 10 - 20%
    '#d0d1e6', // 20 - 30%
    '#a6bddb', // 30 - 40%
    '#74a9cf', // 40 - 50%
    '#3690c0', // 50 - 60%
    '#0570b0', // 60 - 70%
    '#045a8d', // 70 - 80%
    '#023858', // 80 - 90%
  ],

  HighlightColor: 'red',

  ElementIDs: {
    Map: 'map',
    Chart: 'chart',
    ChartVerticalAxis: 'chart-vertical-axis',
  },

  TransitionDuration: 750, // used in zoom function
  MapWidth: 960,
  MapHeight: 600,

  ChartWidth: 700,
  ChartHeight: 700,

  BarThicknessInScrollMode: 20,
  ScrollThreshold: 55, // items in bar chart

  dataPath: {
    populationCSV: isInDevMode
      ? process.env.PUBLIC_URL + '/data/us_population.csv'
      : 'https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/us-viz/main/public/data/us_population.csv',
    usMap: isInDevMode
      ? process.env.PUBLIC_URL + '/data/us_c.json'
      : 'https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/us-viz/main/public/data/us_c.json',
    usUnemploymentRate: isInDevMode
      ? process.env.PUBLIC_URL + '/data/u_rate.json'
      : 'https://raw.githubusercontent.com/AmirhosseinAzimyzadeh/us-viz/main/public/data/u_rate.json',
  }
}

export default Config;
