import { getColorMidiCode, BRIGHTNESS } from './color.js';
import { byXy } from '../launchpad/buttons.js';

export function getLedMap(onOffMap, colorMap) {
  const ledMap = [];

  for (let i = 0; i < onOffMap.length; i++) {
    const rowOnOff = onOffMap[i];
    const rowColor = colorMap[i];

    const row = [];

    for (let j = 0; j < rowOnOff.length; j++) {
      const buttonOnOff = rowOnOff[j];
      const buttonColor = rowColor[j];
      const btn = byXy(j, i);

      if (!buttonOnOff) {
        row.push(undefined);

        continue;
      }

      row.push([btn.cmd, btn.key, getColorMidiCode(BRIGHTNESS.High, buttonColor)]);

    }

    ledMap.push(row);
  }

  console.log(ledMap);
  return ledMap;
}
