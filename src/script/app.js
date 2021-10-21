import { initialize } from './midi.js';
import { getButtonFromMidiMessage } from './launchpad/buttons.js';

function logButtonPress(button) {
  console.log(button);
}

function handleButtonPress(msg) {
  const lpButton = getButtonFromMidiMessage(msg);

  logButtonPress(lpButton);
}

async function go() {
  await initialize(handleButtonPress);
}

go().catch(console.error);
