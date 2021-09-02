import './round-chart.sass';

const getRoundChart = function (options = []) {
  const votes = options;
  const sum = votes.reduce((summa, current) => summa + current, 0);
  const dash = votes.map((item) => ((item > 0) ? Math.abs((item / sum) * 100 - 0.5) : 0));
  const dashoffset = [];

  for (let i = 0; i < dash.length; i += 1) {
    if (i === 0) {
      dashoffset.push(25);
      continue;
    }
    dashoffset.push(100 - dash[i - 1] + dashoffset[i - 1] - 0.5);
  }

  const chart = `
  <figure class = 'chart'>
    <figure class='chart__content'>
      <svg width='100%' height='100%' viewBox='0 0 34 34' class='chart__donut'>
        <circle class='donut-hole' cx='17' cy='17' r='15.91549430918954' fill='#fff'></circle>
        <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#909090' stroke-width='1' stroke-dasharray='${dash[0]} ${100 - dash[0]}' stroke-dashoffset='${dashoffset[0]}'></circle>
        <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#BC9CFF' stroke-width='1' stroke-dasharray='${dash[1]} ${100 - dash[1]}' stroke-dashoffset='${dashoffset[1]}'></circle>
        <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#6FCF97' stroke-width='1' stroke-dasharray='${dash[2]} ${100 - dash[2]}' stroke-dashoffset='${dashoffset[2]}'></circle>
        <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#FFE39C' stroke-width='1' stroke-dasharray='${dash[3]} ${100 - dash[3]}' stroke-dashoffset='${dashoffset[3]}'></circle>
        <g class='chart__text'>
            <text x='50%' y='50%' class='chart__number'>
            ${sum}
            </text>
            <text x='50%' y='50%' class='chart__label'>
            голосов
            </text>
        </g>
      </svg>
    </figure>
    <figcaption class='chart__key'>
      <ul class='chart__key-list' aria-hidden='true' role='presentation'>
        <li class='chart__key-item'>
          <span class='chart__key-dot chart__key-dot_great'></span> Великолепно
        </li>
        <li class='chart__key-item'>
          <span class='chart__key-dot chart__key-dot_good'></span> Хорошо
        </li>
        <li class='chart__key-item'>
          <span class='chart__key-dot chart__key-dot_satisfactory'></span> Удовлетворительно
        </li>
        <li class='chart__key-item'>
          <span class='chart__key-dot chart__key-dot_disappointed'></span> Разочарован
        </li>

      </ul>
    </figcaption>
  </figure>
  `;

  return chart;
};

export { getRoundChart };
