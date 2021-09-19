/* eslint-disable no-unused-vars */

import { ControlPanel } from './control-panel';

{
  const controlPanelTargets = [...document.querySelectorAll('.js-control-panel')];
  if (controlPanelTargets) {
    const controlPanel = controlPanelTargets.map((item) => new ControlPanel(item));
  }
}
