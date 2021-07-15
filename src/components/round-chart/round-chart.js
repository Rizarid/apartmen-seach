import "./round-chart.sass";

{
  const roundChart = document.querySelector(".js-round-chart__content");
  roundChart.innerHTML = getRoundChart([0, 65, 65, 130]);
}

function getRoundChart(data) {
  
  const chartData = {};
  chartData.data = data;

  chartData.sum = chartData.data.reduce((sum, current) => sum + current, 0);
  chartData.dash = chartData.data.map(item => (item > 0) ? Math.abs((item / chartData.sum) * 100 - 0.5) : 0);

  chartData.dashoffset = []

  for (let i = 0; i < chartData.dash.length; i++) {
    if (i == 0) {
      chartData.dashoffset.push(25);
      continue
    }

    chartData.dashoffset.push(100 - chartData.dash[i-1] + chartData.dashoffset[i-1] - 0.5);
  }

  const chart = `
  <figure class = "chart">
    <figure class="chart__content">
      <svg width="100%" height="100%" viewBox="0 0 34 34" class="chart__donut">
        <circle class="donut-hole" cx="17" cy="17" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-segment" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#909090" stroke-width="1" stroke-dasharray="${chartData.dash[0]} ${100 - chartData.dash[0]}" stroke-dashoffset="${chartData.dashoffset[0]}"></circle>
        <circle class="donut-segment" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#BC9CFF" stroke-width="1" stroke-dasharray="${chartData.dash[1]} ${100 - chartData.dash[1]}" stroke-dashoffset="${chartData.dashoffset[1]}"></circle>
        <circle class="donut-segment" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#6FCF97" stroke-width="1" stroke-dasharray="${chartData.dash[2]} ${100 - chartData.dash[2]}" stroke-dashoffset="${chartData.dashoffset[2]}"></circle>
        <circle class="donut-segment" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFE39C" stroke-width="1" stroke-dasharray="${chartData.dash[3]} ${100 - chartData.dash[3]}" stroke-dashoffset="${chartData.dashoffset[3]}"></circle>
        <g class="chart__text">
            <text x="50%" y="50%" class="chart__number">
            ${chartData.sum}
            </text>
            <text x="50%" y="50%" class="chart__label">
            голосов
            </text>
        </g>
      </svg>
    </figure>
    <figcaption class="chart__key">
      <ul class="chart__key-list" aria-hidden="true" role="presentation">
        <li class="chart__key-item">
          <span class="chart__key-dot chart__key-dot_great"></span> Великолепно
        </li>
        <li class="chart__key-item">
          <span class="chart__key-dot chart__key-dot_good"></span> Хорошо
        </li>
        <li class="chart__key-item">
          <span class="chart__key-dot chart__key-dot_satisfactory"></span> Удовлетворительно
        </li>
        <li class="chart__key-item">
          <span class="chart__key-dot chart__key-dot_disappointed"></span> Разочарован
        </li>

      </ul>
    </figcaption>
  </figure>
  `

  return chart;
}