import { COMMANDS, BUTTON_STATE } from './buttons.js';

export function getButtonFromMidiMessage(midiMsg) {
  const [ command, note, velocity ] = midiMsg.data;

  const button = { state: velocity === 0 ? BUTTON_STATE.Unpressed : BUTTON_STATE.Pressed };

  if (command === COMMANDS.OtherButtons) {
    button.x = note % 0x10;
    button.y = (note - button.x) / 0x10;
  }
  else {
    button.x = note - 0x68;
    button.y = 8;
  }

  return button;
}
