import { initialize } from './midi.js';
import { LaunchpadOutput } from './launchpad/output.js';
import { getButtonFromMidiMessage } from './launchpad/input-buttons.js';
import * as sensource from './sensource.js';

function logButtonPress(button) {
  console.log(button);
}

function handleButtonPress(msg) {
  const lpButton = getButtonFromMidiMessage(msg);

  logButtonPress(lpButton);
}

async function go() {
  const { input, output } = await initialize(handleButtonPress);

  const launchPadOutput = new LaunchpadOutput(output);

  await sensource.go(launchPadOutput);
}

go().then(() => console.log('Done')).catch(console.error);
