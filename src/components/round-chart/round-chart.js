import './round-chart.sass';

class RoundChart {
  constructor(target) {
    this._body = target;
    this._content = this._getContent();
    this._votes = this._getVotes();
    this._sum = this._getSum();
    this._dash = this._getDash();
    this._createDashoffset();
    this._content.innerHTML = this._createChart();
  }

  _getContent = () => this._body.querySelector('.js-round-chart__content');

  _getVotes = () => {
    const { first, second, third, fourth } = this._body.dataset;
    return [Number(first), Number(second), Number(third), Number(fourth)];
  }

  _getSum = () => this._votes.reduce((summa, current) => summa + current, 0);

  _getDash = () => (
    this._votes.map((item) => ((item > 0) ? Math.abs((item / this._sum) * 100 - 0.5) : 0))
  );

  _createDashoffset = () => {
    this._dashoffset = [];

    for (let i = 0; i < this._dash.length; i += 1) {
      if (i === 0) {
        this._dashoffset.push(25);
        continue;
      }
      this._dashoffset.push(100 - this._dash[i - 1] + this._dashoffset[i - 1] - 0.5);
    }

    return this._dashoffset;
  }

  _createChart = () => `
    <figure class = 'chart'>
      <figure class='chart__content'>
        <svg width='100%' height='100%' viewBox='0 0 34 34' class='chart__donut'>
          <circle class='donut-hole' cx='17' cy='17' r='15.91549430918954' fill='#fff'></circle>
          <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#909090' stroke-width='1' stroke-dasharray='${this._dash[0]} ${100 - this._dash[0]}' stroke-dashoffset='${this._dashoffset[0]}'></circle>
          <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#BC9CFF' stroke-width='1' stroke-dasharray='${this._dash[1]} ${100 - this._dash[1]}' stroke-dashoffset='${this._dashoffset[1]}'></circle>
          <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#6FCF97' stroke-width='1' stroke-dasharray='${this._dash[2]} ${100 - this._dash[2]}' stroke-dashoffset='${this._dashoffset[2]}'></circle>
          <circle class='donut-segment' cx='17' cy='17' r='15.91549430918954' fill='transparent' stroke='#FFE39C' stroke-width='1' stroke-dasharray='${this._dash[3]} ${100 - this._dash[3]}' stroke-dashoffset='${this._dashoffset[3]}'></circle>
          <g class='chart__text'>
            <text x='50%' y='50%' class='chart__number'>
              ${this._sum}
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
    `
}

export { RoundChart };
