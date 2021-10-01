import { Header } from '../../blocks/header/header';
import '../../blocks/footer/footer';
import './headers.sass';

class Headers {
  constructor() {
    this._body = this._getBody();
    this._headers = this._getHeaders();
  }

  _getBody = () => document.querySelector('.js-headers');

  _getHeaders = () => {
    const headerTargets = Array.from(this._body.querySelectorAll('.js-headers__header-container'));
    return headerTargets.map((item) => new Header(item));
  }
}

export { Headers };
