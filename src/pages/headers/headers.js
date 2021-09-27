/* eslint-disable no-unused-vars */

import { Header } from '../../blocks/header/header';
import '../../blocks/footer/footer';
import '../../fonts/fonts.css';
import '../../fonts/scss/_path.scss';
import './headers.sass';

{
  const headerTargets = Array.from(document.querySelectorAll('.js-headers__header-container'));
  const headers = headerTargets.map((item) => new Header(item));
}