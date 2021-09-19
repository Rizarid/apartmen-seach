/* eslint-disable no-unused-vars */

import { RoundChart } from './round-chart';

{
  const chartTarget = document.querySelector('.js-round-chart');
  if (chartTarget) {
    const roundChart = new RoundChart(chartTarget);
  }
}
