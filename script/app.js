import { initialize } from './midi.js';
import { getButtonFromMidiMessage } from './launchpad/input-buttons.js';
import { LaunchpadOutput, COLORS } from './launchpad/output.js';

function logButtonPress(button) {
  console.log(button);
}


function handleButtonPress(msg) {
  const lpButton = getButtonFromMidiMessage(msg);

  logButtonPress(lpButton);
}

async function go() {
  const { input, output } = await initialize(handleButtonPress);

  console.log(input, output);

  const launchPadOutput = new LaunchpadOutput(output);

  launchPadOutput.reset(0);

  const pixels = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
  ];

  pixels.forEach((pix) => launchPadOutput.setColor(COLORS.Amber, pix, 3));

}

go().then(() => console.log('Done')).catch(console.error);
