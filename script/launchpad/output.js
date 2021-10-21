import { byXy } from './buttons.js';
import { BRIGHTNESS, getBrightnessMidiCode, getColorMidiCode } from '../display/color.js';

export class LaunchpadOutput {
  _midiOutput = undefined;

  constructor(midiOutput) {
    this._midiOutput = midiOutput;
  }

  reset(brightness) {
    this._sendRaw([0xb0, 0x00, getBrightnessMidiCode(brightness)]);
  }

  setColor(color, button, brightness = BRIGHTNESS.High) {
    const [x, y] = button;

    const btn = byXy(x, y);

    this._sendRaw([btn.cmd, btn.key, getColorMidiCode(brightness, color)]);
  }

  setDisplay(ledMap) {
    for (const row of ledMap) {
      for (const button of row) {
        if (button) {
          this._sendRaw(button);
        }
      }
    }

  }

  _sendRaw(data) {
    this._midiOutput.send(data);
  }
}
